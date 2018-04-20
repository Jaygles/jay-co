import styled from 'react-emotion';

export default styled('div')`
  max-width: 100vw;
  width: 90%;
  margin-bottom: 30px;
  word-wrap: break-word;
  a {
    color: #72b597;
    text-decoration: none;
    &:visited {
      color: #72b597;
    }
    &:hover {
      color: #377c79;
      cursor: pointer;
    }
  }
  p {
    font-size: 24px;
    line-height: 140%;
    text-align: left;
    @media (max-width: 359px) {
      font-size: 24px;
      line-height: 160%;
      text-align: center;
    }
    @media (min-width: 360px) {
      font-size: 24px;
      line-height: 140%;
      text-align: center;
    }
    @media (min-width: 600px) {
      font-size: 24px;
      line-height: 140%;
      text-align: left;
    }
    @media (min-width: 768px) {
      font-size: 32px;
      line-height: 140%;
      text-align: left;
    }
    @media (min-width: 1899px) {
      font-size: 32px;
      line-height: 140%;
      text-align: left;
    }
    @media (min-width: 2559px) {
      font-size: 40px;
      line-height: 150%;
      text-align: left;
    }
    @media (min-width: 4559px) {
      font-size: 96px;
      line-height: 140%;
      text-align: left;
    }
  }
  code {
    @media (max-width: 359px) {
      font-size: 14px;
      line-height: 160%;
      text-align: center;
    }
    @media (min-width: 360px) {
      font-size: 14px;
      line-height: 140%;
      text-align: center;
    }
    @media (min-width: 600px) {
      font-size: 18px;
      line-height: 140%;
      text-align: left;
    }
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 140%;
      text-align: left;
    }
    @media (min-width: 1899px) {
      font-size: 24px;
      line-height: 140%;
      text-align: left;
    }
    @media (min-width: 2559px) {
      font-size: 32px;
      line-height: 150%;
      text-align: left;
    }
    @media (min-width: 4559px) {
      font-size: 76px;
      line-height: 140%;
      text-align: left;
    }
  }
  .figure-row {
    width: 100%;
    max-width: 66vw;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    align-items: center;
    justify-content: center;
  }
  .figure-wrap {
    width: auto;
    height: auto;
    margin-top: 20px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  figure {
    display: table;
    img {
      height: 375px;
      width: 375px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      border-radius: 1px;
      @media (min-width: 3839px) {
        height: 700px;
        width: 700px;
      }
      @media (min-width: 4559px) {
        height: 1200px;
        width: 1200px;
      }
    }
  }
  figcaption {
    caption-side: bottom;
    display: table-caption;
    padding: 1px;
    font-style: italic;
    text-align: center;
    @media (max-width: 359px) {
      font-size: 18px;
    }
    @media (min-width: 360px) {
      font-size: 18px;
    }
    @media (min-width: 600px) {
      font-size: 20px;
    }
    @media (min-width: 768px) {
      font-size: 22px;
    }
    @media (min-width: 1899px) {
      font-size: 24px;
    }
    @media (min-width: 2559px) {
      font-size: 30px;
    }
    @media (min-width: 4559px) {
      font-size: 48px;
    }
  }
`;
