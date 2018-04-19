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
    font-size: 21px;
    line-height: 140%;
  }
  .figure-row {
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
    }
  }
  figcaption {
    caption-side: bottom;
    display: table-caption;
    padding: 1px;
    font-style: italic;
    text-align: center;
  }
`;
