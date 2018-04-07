import styled from 'react-emotion';

export default styled('div')`
  height: calc(100vh - 40px);
  width: 100%;
  grid-area: animation;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr;
  grid-template-areas:
    '  animation  '
    ' description ';
  align-items: center;
  justify-items: center;
`;
