import styled from 'react-emotion';

export default styled('div')`
  height: calc(100vh - 40px);
  width: 100%;
  grid-area: animation;
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  grid-template-rows: 1fr 1fr 2fr;
  grid-template-areas:
    ' .       .       . '
    ' .   animation   . '
    ' .  description  . ';
`;
