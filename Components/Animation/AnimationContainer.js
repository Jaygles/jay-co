import * as React from 'react';
import AnimationCSS from './AnimationCSS';
import styled from 'react-emotion';

const AnimationWrap = styled('div')`
  grid-area: animation;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class AnimationContainer extends React.Component {
  render() {
    return (
      <AnimationWrap className={AnimationCSS}>
        <section class="container">
          <div id="cube">
            <figure class="front" />
            <figure class="back" />
            <figure class="right" />
            <figure class="left" />
            <figure class="top" />
            <figure class="bottom">
              <div class="a" />
              <div class="b">
                <div class="ba" />
                <div class="bb" />
                <div class="bc" />
                <div class="bd" />
                <div class="be" />
                <div class="bf" />
              </div>
              <div class="c" />
              <div class="d">
                <div class="da" />
                <div class="db" />
                <div class="dc" />
                <div class="dd" />
                <div class="de" />
                <div class="df" />
              </div>
              <div class="e">
                <div class="ea" />
                <div class="eb" />
                <div class="ec" />
                <div class="ed" />
                <div class="ee" />
                <div class="ef" />
                <div class="eg" />
                <div class="eh" />
                <div class="ei" />
                <div class="ej" />
                <div class="ek" />
              </div>
              <div class="f">
                <div class="fa" />
                <div class="fb" />
                <div class="fc" />
                <div class="fd" />
                <div class="fe" />
                <div class="ff" />
              </div>
              <div class="g" />
              <div class="h">
                <div class="ha" />
                <div class="hb" />
                <div class="hc" />
                <div class="hd" />
                <div class="he" />
                <div class="hf" />
              </div>
              <div class="i" />
            </figure>
          </div>
          <div class="bldg">
            <div class="bldg-a">
              <div class="bldg-a-wa" />
              <div class="bldg-a-wb" />
              <div class="bldg-a-wc" />
              <div class="bldg-a-wd" />
              <div class="bldg-a-we" />
              <div class="bldg-a-wf" />
              <div class="bldg-a-wg" />
              <div class="bldg-a-wh" />
            </div>
            <div class="bldg-b">
              <div class="bldg-b-wa" />
              <div class="bldg-b-wb" />
              <div class="bldg-b-wc" />
              <div class="bldg-b-wd" />
              <div class="bldg-b-we" />
              <div class="bldg-b-wf" />
              <div class="bldg-b-wg" />
              <div class="bldg-b-wh" />
            </div>
            <div class="bldg-c">
              <div class="bldg-c-wa" />
              <div class="bldg-c-wb" />
              <div class="bldg-c-wc" />
              <div class="bldg-c-wd" />
              <div class="bldg-c-we" />
              <div class="bldg-c-wf" />
              <div class="bldg-c-d" />
            </div>
            <div class="bldg-d">
              <div class="bldg-d-wa" />
              <div class="bldg-d-wb" />
              <div class="bldg-d-wc" />
              <div class="bldg-d-wd" />
              <div class="bldg-d-we" />
              <div class="bldg-d-wf" />
              <div class="bldg-d-wg" />
              <div class="bldg-d-wh" />
            </div>
            <div class="bldg-sign">
              <p class="bldg-sign-text">WESTERN AUTO</p>
            </div>
            <div class="bldg-sign-pole-a" />
            <div class="bldg-sign-pole-b" />
          </div>
          <div class="store">
            <div class="store-a">
              <div class="store-aa" />
              <div class="store-ab" />
              <div class="store-ac" />
              <div class="store-ad" />
              <div class="store-ae" />
              <div class="store-af" />
              <div class="store-ag" />
              <div class="store-ah" />
              <div class="store-ai" />
              <div class="store-aj" />
              <div class="store-ak" />
              <div class="store-al" />
              <div class="store-am" />
              <div class="store-an" />
              <div class="store-ao" />
              <div class="store-ap" />
              <div class="store-aq" />
              <div class="store-ar" />
              <div class="store-as" />
              <div class="store-at" />
              <div class="store-au" />
              <div class="store-av" />
              <div class="store-aw" />
              <div class="store-ax" />
              <div class="store-ay" />
              <div class="store-az" />
            </div>
            <div class="store-b">
              <div class="store-b-a" />
              <div class="store-b-b" />
            </div>
            <div class="store-c" />
            <div class="store-d">
              <div class="store-d-wa" />
              <div class="store-d-wb" />
              <div class="store-d-sign">
                <p class="store-d-sign-text">IT'S A BEAUTIFUL DAY</p>
              </div>
              <div class="store-d-d" />
            </div>
            <div class="store-e" />
          </div>
          <div class="tree">
            <div class="tree-a" />
            <div class="tree-b" />
            <div class="tree-c" />
            <div class="tree-d" />
            <div class="tree-e" />
            <div class="tree-f" />
            <div class="tree-g" />
            <div class="tree-h" />
            <div class="tree-i" />
            <div class="tree-j" />
            <div class="tree-k" />
            <div class="tree-l" />
            <div class="tree-m" />
            <div class="tree-n" />
            <div class="tree-o" />
            <div class="tree-p" />
          </div>
          <div class="pole">
            <div class="pole-a" />
            <div class="pole-b" />
            <div class="pole-c" />
            <div class="pole-d" />
            <div class="pole-sign">
              <p class="pole-sign-text">BUS</p>
            </div>
            <div class="pole-sign-back" />
          </div>
          <div class="bus-stop">
            <div class="bus-stop-a" />
            <div class="bus-stop-b" />
            <div class="bus-stop-c" />
            <div class="bus-stop-d" />
          </div>
        </section>
      </AnimationWrap>
    );
  }
}

export default AnimationContainer;
