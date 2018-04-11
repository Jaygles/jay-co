import styled from 'react-emotion';

export default styled('div')`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 50px;
  grid-template-areas:
    '  heading  '
    ' animation '
    '   arrow   ';
`;
