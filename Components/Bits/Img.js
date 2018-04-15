import styled from 'react-emotion';

const Img = styled('img')`
  min-width: calc(100% - 40px);
  max-width: calc(100% - 40px);
  margin-right: 40px;
  align-self: end;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  @media (max-width: 650px) {
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default Img;
