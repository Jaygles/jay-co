import styled from 'react-emotion';

export default styled('div')`
  width: 100%;
  height: 100vh;
  min-height: 650px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(100px, 8vw) minmax(200px, 40vh) minmax(115px, auto) auto;
  grid-template-areas:
    '  heading  '
    ' animation '
    'description'
    '   arrow   ';
  @media (max-width: 359px) {
    grid-template-rows:
      minmax(20px, 8vw) minmax(200px, 40vh) minmax(130px, 45vh)
      auto;
  }
  @media (min-width: 360px) {
    grid-template-rows:
      minmax(50px, 8vw) minmax(270px, 40vh) minmax(300px, 45vh)
      auto;
  }
  @media (min-width: 600px) {
    grid-template-rows:
      minmax(70px, 8vw) minmax(350px, 40vh) minmax(200px, 45vh)
      auto;
  }
  @media (min-width: 768px) {
    grid-template-rows:
      minmax(100px, 8vw) minmax(400px, 40vh) minmax(300px, 45vh)
      auto;
  }
  @media (min-width: 1899px) {
    grid-template-rows:
      minmax(150px, 8vw) minmax(700px, 40vh) minmax(505px, 45vh)
      auto;
  }
  @media (min-width: 2559px) {
    grid-template-rows:
      minmax(260px, 8vw) minmax(900px, 40vh) minmax(905px, 30vh)
      auto;
  }
  @media (min-width: 4559px) {
    grid-template-rows:
      minmax(350px, 8vw) minmax(1000px, 40vh) minmax(1000px, 40vh)
      auto;
  }
`;
