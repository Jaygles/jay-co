import styled from 'react-emotion';

export default styled('section')`
  width: 100%;
  max-width: 100vw;
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  @media (max-width: 650px) {
    justify-items: center;
  }
`;
