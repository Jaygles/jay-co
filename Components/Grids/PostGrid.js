import styled from 'react-emotion';

export default styled('section')`
  width: 100%;
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  @media (max-width: 650px) {
    width: 96vw;
    justify-items: center;
  }
`;
