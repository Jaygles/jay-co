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
`;
