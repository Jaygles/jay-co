import styled from 'react-emotion';

export default styled('div')`
  height: 100vh;
  width: 100%;
  grid-area: animation;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    ' .       .       . '
    ' .   animation   . '
    ' .  description  . ';
`;
