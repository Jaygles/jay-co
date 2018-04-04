import * as React from 'react';
import styled from 'react-emotion';

const HeadingWrap = styled('div')`
  display: flex;
  flex-direction: column;
  grid-area: heading;
`;

const HeadingSpan = styled('span')`
  margin: 10px;
  font-family: IBM Plex Sans;
  color: #c74e44;
  font-size: calc(50px + 14vw);
  line-height: 70%;
  &:first-of-type {
    color: #ef7c73;
    margin-left: 25px;
  }
  &:last-of-type {
    color: #ffc8c4;
    margin-left: 17px;
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
