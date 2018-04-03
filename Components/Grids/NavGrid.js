import styled from 'react-emotion';

export default styled('nav')`
  height: calc(100vh - 140px);
  min-height: 200px;
  width: 140px;
  padding-top: 20px;
  margin-left: 20px;
  border-right: 1px dotted #5a5a5a;
  position: fixed;
  grid-area: nav;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, 50px);
  grid-gap: 10px;
`;
