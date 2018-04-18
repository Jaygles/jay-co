import styled from 'react-emotion';

const AnimationBackdrop = styled('div')`
  height: 300px;
  width: 300px;
  margin-top: 20px;
  background: #efefef;
  box-shadow: 1px 1px 1px 4px #000e25;
  position: relative;
  grid-area: animation;
  align-self: start;
  justify-self: center;
  transition: 0.3s all ease-in;
  transform: rotateZ(53deg) rotateX(28deg) rotateY(-32deg) translateY(40px)
    translateX(40px);

  @media (max-width: 359px) {
    margin-top: 12vh;
    height: 150px;
    width: 150px;
  }
  @media (min-width: 360px) {
    margin-top: 12vh;
    height: 200px;
    width: 200px;
  }
  @media (min-width: 600px) {
    margin-top: 16vh;
    height: 250px;
    width: 250px;
  }
  @media (min-width: 768px) {
    margin-top: 12vh;
    height: 300px;
    width: 300px;
  }
  @media (min-width: 1899px) {
    height: 500px;
    width: 500px;
  }
  @media (min-width: 2559px) {
    margin-top: 8vh;
    height: 700px;
    width: 700px;
  }
  @media (min-width: 4559px) {
    height: 1000px;
    width: 1000px;
  }
`;

export default AnimationBackdrop;
