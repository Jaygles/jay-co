import styled from 'react-emotion';

export default styled('div')`
  height: calc(100vh - 16px);
  width: calc(100vw - 16px);
  display: grid;
  grid-template-columns: 1fr 250px 1fr;
  grid-template-rows: 1fr 300px 1fr;
  grid-template-areas:
    ' .   .   . '
    ' . login . '
    ' .   .   . ';
`;
