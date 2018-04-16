import styled, { css } from 'react-emotion';

export const main = styled('div')`
  width: 100%;
  margin-bottom: 20px;
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 20px;
  @media (max-width: 650px) {
  }
`;

export const single = styled('div')`
  min-height: 500px;
  justify-self: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
`;
