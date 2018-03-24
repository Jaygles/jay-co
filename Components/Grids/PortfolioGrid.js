import styled from 'react-emotion';

export const main = styled('div')`
  width: 100%;
  grid-column-start: 2;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: auto;
`;

export const single = styled('div')`
  justify-self: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;
