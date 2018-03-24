import styled from 'react-emotion';

export const main = styled('div')`
  width: 100%;
  grid-column-start: 2;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: auto;
  transition: 0.5s all ease;
`;

export const single = styled('div')`
  justify-self: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  transition: 0.5s all ease;
`;
