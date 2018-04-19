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
    margin-top: 20px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-items: center;
    justify-content: center;
  }
  .figure-wrap {
    width: auto;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  figure {
    img {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      border-radius: 1px;
    }
  }
  figcaption {
    padding: 1px;
    font-style: italic;
    text-align: center;
  }
`;
