import styled from 'react-emotion';

const AnimationBackdrop = styled('div')`
  height: 300px;
  width: 300px;
  background: #efefef;
  box-shadow: 1px 1px 1px 4px #000e25;
  position: relative;
  grid-area: animation;
  align-self: center;
  justify-self: center;
  transition: 0.3s all ease-in;
  transform: rotateZ(53deg) rotateX(28deg) rotateY(-32deg) translateY(40px)
    translateX(40px);

  @media (max-width: 359px) {
    height: 200px;
    width: 200px;
  }
  @media (min-width: 360px) {
    height: 250px;
    width: 250px;
  }
  @media (min-width: 600px) {
    height: 350px;
    width: 350px;
  }
  @media (min-width: 1023px) {
    height: 400px;
    width: 400px;
  }
  @media (min-width: 1899px) {
    height: 600px;
    width: 600px;
  }
  @media (min-width: 2559px) {
    height: 1200px;
    width: 1200px;
  }
  @media (min-width: 4559px) {
    height: 2000px;
    width: 2000px;
  }
`;

export default AnimationBackdrop;
