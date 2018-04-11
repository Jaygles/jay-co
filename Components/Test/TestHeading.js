import * as React from 'react';
import styled from 'react-emotion';

const HeadingWrap = styled('div')`
  margin-top: 30px;
  text-align: center;
  font-family: Kiona, sans-serif;
  font-weight: 100;
  grid-area: heading;
`;

const Heading = styled('p')`
  font-size: 10vw;
`;

class TestHeading extends React.Component {
  render() {
    const { target, label } = this.props;
    return (
      <HeadingWrap>
        <Heading>JACOB SULLIVAN</Heading>
      </HeadingWrap>
    );
  }
}

export default TestHeading;
