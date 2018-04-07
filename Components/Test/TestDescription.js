import * as React from 'react';
import styled from 'react-emotion';
import * as Text from '../Bits/Text';

const DescriptionWrap = styled('div')`
  height: 100%;
  width: 66%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class TestDescription extends React.Component {
  render() {
    return (
      <DescriptionWrap>
        <Text.MainDescription>
          Jacob Sullivan is a Kansas City based Web Developer, noobie blogger
          and avid learner.
        </Text.MainDescription>
      </DescriptionWrap>
    );
  }
}

export default TestDescription;
