import * as React from 'react';
import styled from 'react-emotion';
import AnimationCSS from './AnimationCSS';

const AnimationWrap = styled('div')`
  grid-area: animation;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s all linear;
  // transform: scale3d(0.8, 0.8, 0.8);

  // @media (max-width: 359px) {
  //   transform: scale3d(0.6, 0.6, 0.6);
  // }
  // @media (min-width: 360px) {
  //   transform: scale3d(0.7, 0.7, 0.7);
  // }
  // @media (min-width: 600px) {
  //   transform: scale3d(0.8, 0.8, 0.8);
  // }
  // @media (min-width: 1023px) {
  //   transform: scale3d(1, 1, 1);
  // }
  // @media (min-width: 1899px) {
  //   transform: scale3d(1.6, 1.6, 1.6);
  // }
  // @media (min-width: 2559px) {
  //   transform: scale3d(2, 2, 2);
  // }
  // @media (min-width: 4559px) {
  //   transform: scale3d(4, 4, 4);
  // }
`;

class Animation extends React.Component {
  render() {
    return (
      <AnimationWrap className={AnimationCSS}>
        <section className="container">
          <div id="cube">
            <figure className="front" />
            <figure className="back" />
            <figure className="right" />
            <figure className="left" />
            <figure className="top" />
            <figure className="bottom">
              <div className="a" />
              <div className="b">
                <div className="ba" />
                <div className="bb" />
                <div className="bc" />
                <div className="bd" />
                <div className="be" />
                <div className="bf" />
              </div>
              <div className="c" />
              <div className="d">
                <div className="da" />
                <div className="db" />
                <div className="dc" />
                <div className="dd" />
                <div className="de" />
                <div className="df" />
              </div>
              <div className="e">
                <div className="ea" />
                <div className="eb" />
                <div className="ec" />
                <div className="ed" />
                <div className="ee" />
                <div className="ef" />
                <div className="eg" />
                <div className="eh" />
                <div className="ei" />
                <div className="ej" />
                <div className="ek" />
              </div>
              <div className="f">
                <div className="fa" />
                <div className="fb" />
                <div className="fc" />
                <div className="fd" />
                <div className="fe" />
                <div className="ff" />
              </div>
              <div className="g" />
              <div className="h">
                <div className="ha" />
                <div className="hb" />
                <div className="hc" />
                <div className="hd" />
                <div className="he" />
                <div className="hf" />
              </div>
              <div className="i" />
            </figure>
          </div>
          <div className="bldg">
            <div className="bldg-a">
              <div className="bldg-a-wa" />
              <div className="bldg-a-wb" />
              <div className="bldg-a-wc" />
              <div className="bldg-a-wd" />
              <div className="bldg-a-we" />
              <div className="bldg-a-wf" />
              <div className="bldg-a-wg" />
              <div className="bldg-a-wh" />
            </div>
            <div className="bldg-b">
              <div className="bldg-b-wa" />
              <div className="bldg-b-wb" />
              <div className="bldg-b-wc" />
              <div className="bldg-b-wd" />
              <div className="bldg-b-we" />
              <div className="bldg-b-wf" />
              <div className="bldg-b-wg" />
              <div className="bldg-b-wh" />
            </div>
            <div className="bldg-c">
              <div className="bldg-c-wa" />
              <div className="bldg-c-wb" />
              <div className="bldg-c-wc" />
              <div className="bldg-c-wd" />
              <div className="bldg-c-we" />
              <div className="bldg-c-wf" />
              <div className="bldg-c-d" />
            </div>
            <div className="bldg-d">
              <div className="bldg-d-wa" />
              <div className="bldg-d-wb" />
              <div className="bldg-d-wc" />
              <div className="bldg-d-wd" />
              <div className="bldg-d-we" />
              <div className="bldg-d-wf" />
              <div className="bldg-d-wg" />
              <div className="bldg-d-wh" />
            </div>
            <div className="bldg-sign">
              <p className="bldg-sign-text">WESTERN AUTO</p>
            </div>
            <div className="bldg-sign-pole-a" />
            <div className="bldg-sign-pole-b" />
          </div>
          <div className="stop-a">
            <div className="stop-aa" />
            <div className="stop-ab" />
            <div className="stop-ac" />
            <div className="stop-ad" />
            <div className="stop-a-sign">
              <span className="stop-a-sign-text">STOP</span>
            </div>
          </div>
          <div className="store">
            <div className="store-a">
              <div className="store-aa" />
              <div className="store-ab" />
              <div className="store-ac" />
              <div className="store-ad" />
              <div className="store-ae" />
              <div className="store-af" />
              <div className="store-ag" />
              <div className="store-ah" />
              <div className="store-ai" />
              <div className="store-aj" />
              <div className="store-ak" />
              <div className="store-al" />
              <div className="store-am" />
              <div className="store-an" />
              <div className="store-ao" />
              <div className="store-ap" />
              <div className="store-aq" />
              <div className="store-ar" />
              <div className="store-as" />
              <div className="store-at" />
              <div className="store-au" />
              <div className="store-av" />
              <div className="store-aw" />
              <div className="store-ax" />
              <div className="store-ay" />
              <div className="store-az" />
            </div>
            <div className="store-b">
              <div className="store-b-a" />
              <div className="store-b-b" />
            </div>
            <div className="store-c" />
            <div className="store-d">
              <div className="store-d-wa" />
              <div className="store-d-wb" />
              <div className="store-d-sign">
                <p className="store-d-sign-text">IT'S A BEAUTIFUL DAY</p>
              </div>
              <div className="store-d-d" />
            </div>
            <div className="store-e" />
          </div>
          <div className="tree">
            <div className="tree-a" />
            <div className="tree-b" />
            <div className="tree-c" />
            <div className="tree-d" />
            <div className="tree-e" />
            <div className="tree-f" />
            <div className="tree-g" />
            <div className="tree-h" />
            <div className="tree-i" />
            <div className="tree-j" />
            <div className="tree-k" />
            <div className="tree-l" />
            <div className="tree-m" />
            <div className="tree-n" />
            <div className="tree-o" />
            <div className="tree-p" />
          </div>
          <div className="stop-b">
            <div className="stop-ba" />
            <div className="stop-bb" />
            <div className="stop-bc" />
            <div className="stop-bd" />
            <div className="stop-b-sign">
              <span className="stop-b-sign-text">STOP</span>
            </div>
          </div>
          <div className="pole">
            <div className="pole-a" />
            <div className="pole-b" />
            <div className="pole-c" />
            <div className="pole-d" />
            <div className="pole-sign">
              <p className="pole-sign-text">BUS</p>
            </div>
            <div className="pole-sign-back" />
          </div>
          <div className="bus-stop">
            <div className="bus-stop-a" />
            <div className="bus-stop-b" />
            <div className="bus-stop-c" />
            <div className="bus-stop-d" />
          </div>
        </section>
      </AnimationWrap>
    );
  }
}

export default Animation;
