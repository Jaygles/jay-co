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
    min-height: 350px;
    grid-template-rows:
      minmax(20px, 8vw) minmax(200px, 40vh) minmax(130px, 45vh)
      auto;
  }
  @media (min-width: 360px) {
    min-height: 620px;
    grid-template-rows:
      minmax(50px, 8vw) minmax(270px, 40vh) minmax(300px, 45vh)
      auto;
  }
  @media (min-width: 600px) {
    min-height: 620px;
    grid-template-rows:
      minmax(70px, 8vw) minmax(350px, 40vh) minmax(200px, 45vh)
      auto;
  }
  @media (min-width: 768px) {
    min-height: 800px;
    grid-template-rows:
      minmax(100px, 8vw) minmax(400px, 40vh) minmax(300px, 45vh)
      auto;
  }
  @media (min-width: 1899px) {
    min-height: 1355px;
    grid-template-rows:
      minmax(100px, 8vw) minmax(500px, 40vh) minmax(200px, 30vh)
      auto;
  }
  @media (min-width: 2559px) {
    min-height: 1600px;
    grid-template-rows:
      minmax(260px, 8vw) minmax(500px, 40vh) minmax(600px, 30vh)
      auto;
  }
  @media (min-width: 3839px) {
    min-height: 2160px;
    grid-template-rows:
      minmax(260px, 8vw) minmax(850px, 40vh) minmax(850px, 30vh)
      auto;
  }
  @media (min-width: 4559px) {
    min-height: 2350px;
    grid-template-rows:
      minmax(350px, 8vw) minmax(1000px, 40vh) minmax(1000px, 40vh)
      auto;
  }
`;
