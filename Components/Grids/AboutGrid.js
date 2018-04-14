import styled from 'react-emotion';

export default styled('div')`
  width: 100%;
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    ' text '
    ' pdf ';
  grid-gap: 20px;
`;
