import * as React from 'react';
import { hydrate, injectGlobal } from 'react-emotion';

const injectGlobalStyles = () => injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    margin: 0;
    width: 100vw;
    max-width: 100%;
    background-color: #001b47;
    color: rgb(220, 220, 220);
    font-family: 'IBM Plex Serif', serif;
    font-size: 12px;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    border-top: 4px solid #83d18f;
    border-left: 4px solid #83d18f;
  }
  @font-face {
    font-family: 'Kiona';
    font-style: normal;
    font-weight: 400;
    src: local('Kiona-Regular'),
    local('Kiona Regular'),
    url(./static/Kiona-Regular),
    format('tff');
    unicode-range: U+0100-024f, U+1-1eff,
      U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f,
      U+A720-A7FF;
  }
`;

export default () => (ComposedComponent) => {
  class withEmotion extends React.Component {
    constructor() {
      super();

      if (typeof window !== 'undefined') {
        hydrate(window.__NEXT_DATA__.ids);
      }
    }

    render() {
      injectGlobalStyles();

      return <ComposedComponent {...this.props} />;
    }
  }

  return withEmotion;
};
