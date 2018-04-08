import * as React from 'react';
import styled from 'react-emotion';

const HeadingWrap = styled('div')`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  grid-area: heading;
`;

const HeadingSpan = styled('span')`
  margin-top: 30px;
  margin-left: 100px;
  font-family: IBM Plex Sans;
  font-weight: bold;
  color: #001b47;
  text-shadow: 1px 1px 2px #83d18f, -1px 1px 2px #83d18f, 1px -1px 2px #83d18f,
    -1px -1px 2px #83d18f;
  font-size: calc(50px + 14vw);
  line-height: 70%;
  &:first-of-type {
    margin-left: 60px;
  }
  &:last-of-type {
    margin-top: 50px;
    margin-left: 150px;
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
