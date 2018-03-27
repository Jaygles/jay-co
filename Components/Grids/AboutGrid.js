import styled from 'react-emotion';

export default styled('div')`
  width: 100%;
  grid-column-start: 2;
  display: grid;
  grid-template-columns: minmax(400px, 1fr) minmax(400px, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
`;
