import Head from 'next/head';
import * as React from 'react';
import Router from 'next/router';
import withEmotion from '../higher-order/withEmotion';
import * as gtag from '../utils/gtag';

Router.onRouteChangeComplete = (url) => {
  gtag.pageview(url);
};

class Document extends React.Component {
  static defaultProps = {
    title: "Jay's Blog",
    description:
      "Kansas City Web Developer Jay Sullivan's blog. It is built with NextJS, Postgres with Sequelize, and React with Redux",
  };

  render() {
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="UTF-8" />
          <meta name="sourceApp" content="mobileWeb" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans|IBM+Plex+Serif"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="static/icons/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="static/icons/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="static/icons/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="static/icons/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="static/icons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="static/icons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="static/icons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="static/icons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/icons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="static/icons/android-icon-192x192.png"
          />
          <link rel="manifest" href="static/manifest.json" />
          <meta name="msapplication-TileColor" content="#001b47" />
          <meta
            name="msapplication-TileImage"
            content="static/icons/ms-icon-144x144.png"
          />
          <meta name="theme-color" content="#001b47" />
        </Head>
        {this.props.children}
      </div>
    );
  }
}

export default withEmotion()(Document);
