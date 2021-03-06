import express from 'express';
import next from 'next';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import url from 'url';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import bodyParser from 'body-parser';
import { join } from 'path';
import setupAuth from './api/auth';
import setupApi from './api';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8081;
const app = next({ dev, quiet: true });
const nextRequestHandler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  if (!dev) {
    server.use(compression());
  }

  server.use(morgan('dev'));
  server.use(cors({ credentials: true, origin: true }));
  server.use(cookieParser());
  server.use(bodyParser.json());
  server.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  );

  setupAuth(server, passport);
  setupApi(server);

  server.get('*', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const rootStaticFiles = [
      '/robots.txt',
      '/sitemap.xml',
      '/favicon.ico',
      '/sw.js',
    ];
    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, 'static', parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      return nextRequestHandler(req, res, parsedUrl);
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Running on localhost:${port}`);
  });
});
