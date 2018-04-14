import * as React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import styled, { css } from 'react-emotion';
import AnnotationCss from './AnnotationCSS';
import * as Text from '../Bits/Text';

const DocWrap = styled('div')`
  width: 100%;
  display: flex;
  grid-area: pdf;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const pageStyles = css`
  margin-bottom: 40px;
  canvas {
    transition: 1s ease-in all;
  }
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
    numPages: null,
    pageNumber: 1,
    width: 0,
    now: Date.now(),
    test(width) {
      return css`
        margin-bottom: 40px;
        canvas {
          transition: 1s ease-in all;
          width: ${width * 0.6}px !important;
          height: ${width * 0.6 * 11 / 8}px !important;
        }
      `;
    },
  };

  componentDidMount = () => {
    this.setState({ width: window.innerWidth });
    window.addEventListener('resize', this._onWindowResize, false);
  };

  _onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  rezieTimeout = null;

  _onWindowResize = () => {
    const actualResizeHandler = (thiis) => {
      thiis.setState({ width: window.innerWidth });
    };
    if (!this.resizeTimeout) {
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = null;
        actualResizeHandler(this);
      }, 250);
    }
  };

  render() {
    const { pageNumber, numPages } = this.state;
    return this.state.width > 800 ? (
      <DocWrap>
        <Document
          className={AnnotationCss}
          file="./static/Resume.pdf"
          onLoadSuccess={this._onDocumentLoad}
        >
          <Page
            className={this.state.test(this.state.width)}
            width={this.state.width * 0.6}
            pageNumber={pageNumber}
          />
          <Page
            className={this.state.test(this.state.width)}
            width={this.state.width * 0.6}
            pageNumber={pageNumber + 1}
          />
        </Document>
      </DocWrap>
    ) : (
      <DocWrap>
        <ResumeLink target="_blank" href="./static/Resume.pdf">
          Download Resume
        </ResumeLink>
      </DocWrap>
    );
  }
}

export default Resume;
