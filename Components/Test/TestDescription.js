import * as React from 'react';
import styled from 'react-emotion';
import * as Text from '../Bits/Text';

const DescriptionWrap = styled('div')`
  height: 100%;
  width: 50%;
  justify-self: center;
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
          Hi, I'm a Kansas City based Web Developer. Feel free to check out my
          work or see what I know. Want to get in touch? I'm just a{' '}
          <Text.Anchor href="mailto:JaySull514@gmail.com">click</Text.Anchor>{' '}
          away.
        </Text.MainDescription>
      </DescriptionWrap>
    );
  }
}

export default TestDescription;
