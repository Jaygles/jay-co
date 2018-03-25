import { css } from 'react-emotion';

const buttonStyle = css`
  font-size: 12px;
  font-weight: 600;
  outline: 0;
  margin-right: 10px;
  padding: 0;
  border: 0;
  cursor: pointer;
  font-family: 'IBM Plex Serif', serif;
  &:hover {
    color: #0000ff;
    text-decoration: underline;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
`;

export default (props) => (
  <button {...props} className={buttonStyle}>
    » {props.children}
  </button>
);
