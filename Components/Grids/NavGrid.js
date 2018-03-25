import styled from 'react-emotion';

export default styled('nav')`
  margin: 20px;
  position: fixed;
  grid-column-start: 1;
  grid-column-end: 1;
  align-self: stretch;
  justify-self: stretch;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
`;
