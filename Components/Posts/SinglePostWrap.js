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
`;
