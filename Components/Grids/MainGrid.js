import styled from 'react-emotion';

export default styled('div')`
  width: 100%;
  min-height: calc(100vh - 100px);
  max-width: 99.9vw;
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 1fr 50px;
  grid-template-areas:
    '  nav    main  '
    ' footer footer ';
`;
