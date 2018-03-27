import * as React from 'react';
import styled from 'react-emotion';
import AboutGrid from '../Grids/AboutGrid';
import * as Text from '../Bits/Text';

const BioImg = styled('img')`
  width: 100%;
  border-radius: 25%;
`;

const BioText = styled('p')`
  width: 80%;
  margin-bottom: 20px;
  text-align: justify;
  justify-self: center;
  align-self: stretch;
  font-size: 28px;
`;

export default class Bio extends React.Component {
  render() {
    return (
      <AboutGrid>
        <BioImg src="/static/mesil.png" />
        <BioText>
          Jacob Sullivan(me) is a Kansas City based web developer. He holds a
          Bachelors of Science in Environmental Studies as well as a
          certification for full stack web development from the University of
          Kansas. All things nerdy has been his passion from the start. His
          first exposure to programming was a text based adventure game he wrote
          in Qbasic for his third grade teacher. He does not have a background
          in design but enjoys spending time stretching the imagination to
          present his work well in the browser window.
        </BioText>
      </AboutGrid>
    );
  }
}
