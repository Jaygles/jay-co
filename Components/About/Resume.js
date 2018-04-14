import * as React from 'react';
import PDF from 'react-pdf-js';
import styled, { css } from 'react-emotion';

const DocWrap = styled('div')`
  width: 80%;
  justify-self: center;
  grid-area: pdf;
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  justify-items: center;
`;

const divStyle = css`
  width: 80%;
  margin-bottom: 50px;
`;

const ResumeLink = styled('a')`
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
  color: #72b597;
  &:hover {
    color: #377c79;
    cursor: pointer;
  }
`;

class Resume extends React.Component {
  state = {
    scale: 1.4,
  };
  componentDidMount = () => {
    this.setState({ scale: window.innerWidth / 1200 });
    window.addEventListener('resize', this._onWindowResize);
  };
  resizeTimeout = null;
  _onWindowResize = () => {
    const actualResizeHandler = (Comp) => {
      Comp.setState({ scale: window.innerWidth / 1200 });
    };
    if (!this.resizeTimeout) {
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = null;
        actualResizeHandler(this);
      }, 250);
    }
  };
  render() {
    return (
      <DocWrap>
        <div className={divStyle}>
          <PDF file="./static/Resume.pdf" scale={this.state.scale} page={1} />
        </div>
        <div className={divStyle}>
          <PDF file="./static/Resume.pdf" scale={this.state.scale} page={2} />
        </div>
      </DocWrap>
    );
  }
}

export default Resume;
