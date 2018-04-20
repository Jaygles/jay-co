import styled from 'react-emotion';

export default styled('div')`
  width: 100%;
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr 50px;
  grid-template-areas:
    '  nav    main  '
    ' footer footer ';

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 1fr 50px;
    grid-template-areas:
      '  nav   '
      '  main  '
      ' footer ';
  }
  @media (min-width: 2559px) {
    grid-template-columns: 400px 1fr;
    grid-template-rows: 1fr 100px;
  }
  @media (min-width: 4559px) {
    grid-template-columns: 800px 1fr;
    grid-template-rows: 1fr 200px;
`;
