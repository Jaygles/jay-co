import styled from 'react-emotion';

export default styled('div')`
  width: 100%;
  max-height: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 60vh auto 50px;
  grid-template-areas:
    '  heading  '
    ' animation '
    'description'
    '   arrow   ';
`;
