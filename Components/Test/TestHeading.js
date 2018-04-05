import * as React from 'react';
import styled from 'react-emotion';

const HeadingWrap = styled('div')`
  display: flex;
  flex-direction: column;
  grid-area: heading;
`;

const HeadingSpan = styled('span')`
  margin-top: 10px;
  margin-left: 70px;
  font-family: IBM Plex Sans;
  color: #c74e44;
  font-size: calc(50px + 14vw);
  line-height: 70%;
  &:first-of-type {
    color: #ef7c73;
    margin-left: 30px;
  }
  &:last-of-type {
    color: #ffc8c4;
    margin-left: 40px;
  }
`;

class TestHeading extends React.Component {
  render() {
    const { target, label } = this.props;
    return (
      <HeadingWrap>
        <HeadingSpan>J</HeadingSpan>
        <HeadingSpan>A</HeadingSpan>
        <HeadingSpan>Y</HeadingSpan>
      </HeadingWrap>
    );
  }
}

export default TestHeading;
