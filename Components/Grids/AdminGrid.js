import styled from 'react-emotion';

export default styled('div')`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 250px 1fr;
  grid-template-rows: 1fr 300px 1fr;
  grid-template-areas:
    ' .   .   . '
    ' . login . '
    ' .   .   . ';
`;
