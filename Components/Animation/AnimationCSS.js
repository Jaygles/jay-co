import { css } from 'react-emotion';

const AnimationCSS = css`
  @keyframes container-anim {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(30px);
    }
    75% {
      transform: translateY(15px);
    }
  }
  .container {
    width: 400px;
    height: 400px;
    position: relative;
    perspective: 1000px;
    transform: translateY(0px);
    animation: container-anim 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #cube {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    z-index: -5;
  }
  #cube figure {
    margin: 0;
    width: 391px;
    height: 391px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 2px;
  }
  #cube .left {
    height: 20px;
  }
  #cube .right {
    height: 20px;
  }
  #cube .front {
    height: 20px;
  }
  #cube .back {
    height: 20px;
  }
  #cube .front {
    background-color: #514237;
    border-bottom: 1.3px solid #514237;
    transform: rotateY(0deg) translateZ(195px) translateY(100px);
  }
  #cube .back {
    background-color: #514237;
    border-top: 1.3px solid #514237;
    transform: rotateX(180deg) translateZ(195px) translateY(-100px);
  }
  #cube .right {
    background-color: #514237;
    border-bottom: 1.3px solid #514237;
    transform: rotateY(90deg) translateZ(195px) translateY(100px);
  }
  #cube .left {
    background-color: #514237;
    border-bottom: 1.3px solid #514237;
    transform: rotateY(-90deg) translateZ(195px) translateY(100px);
  }
  #cube .top {
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;
    transform: rotateX(90deg) translateZ(155px);
  }
  #cube .bottom {
    background-color: #ffc0cb;
    transform: rotateX(-90deg) translateZ(-75.5px);
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(11, 1fr);
    grid-template-areas: 'a a a a b b b c c c c' 'a a a a b b b c c c c' 'a a a a b b b c c c c' 'a a a a b b b c c c c' 'd d d d e e e f f f f' 'd d d d e e e f f f f' 'd d d d e e e f f f f' 'g g g g h h h i i i i' 'g g g g h h h i i i i' 'g g g g h h h i i i i' 'g g g g h h h i i i i';
  }
  @keyframes cube-anim {
    0% {
      transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn);
    }
    25% {
      transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn);
    }
    50% {
      transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn);
    }
    75% {
      transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn);
    }
  }
  #cube {
    transform: rotate3d(1, 0, 0, 0.5turn);
    transition: transform 1s;
    animation: cube-anim 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .a {
    height: 100%;
    width: 100%;
    border-left: 1px solid #56b000;
    border-top: 1px solid #56b000;
    border-radius: 1px;
    grid-area: a;
    background-color: #56b000;
  }
  .b {
    height: 100%;
    width: 100%;
    border-top: 1px solid grey;
    grid-area: b;
    background-color: grey;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(15, 1fr);
    grid-template-areas: ' e . . . . . . a . . . . . . f ' ' e . . . . . . a . . . . . . f ' ' e . . . . . . a . . . . . . f ' ' e . . . . . . . . . . . . . f ' ' e . . . . . . b . . . . . . f ' ' e . . . . . . b . . . . . . f ' ' e . . . . . . b . . . . . . f ' ' e . . . . . . . . . . . . . f ' ' e . . . . . . c . . . . . . f ' ' e . . . . . . c . . . . . . f ' ' e . . . . . . c . . . . . . f ' ' e . . . . . . . . . . . . . f ' ' e . . . . . . d . . . . . . f ' ' e . . . . . . d . . . . . . f ' ' e . . . . . . d . . . . . . f ';
  }
  .ba {
    height: 100%;
    width: 100%;
    grid-area: a;
    background-color: #ff0;
  }
  .bb {
    height: 100%;
    width: 100%;
    grid-area: b;
    background-color: #ff0;
  }
  .bc {
    height: 100%;
    width: 100%;
    grid-area: c;
    background-color: #ff0;
  }
  .bd {
    height: 100%;
    width: 100%;
    grid-area: d;
    background-color: #ff0;
  }
  .be {
    height: 100%;
    width: 100%;
    grid-area: e;
    background-color: #d3d3d3;
  }
  .bf {
    height: 100%;
    width: 100%;
    grid-area: f;
    background-color: #d3d3d3;
  }
  .c {
    height: 100%;
    width: 100%;
    border-right: 1px solid #56b000;
    border-top: 1px solid #56b000;
    border-radius: 1px;
    grid-area: c;
    background-color: #56b000;
  }
  .d {
    height: 100%;
    width: 100%;
    border-left: 1px solid grey;
    grid-area: d;
    background-color: grey;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(15, 1fr);
    grid-template-areas: ' e e e e e e e e e e e e e e e ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' a a a . b b b . c c c . d d d ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' f f f f f f f f f f f f f f f ';
  }
  .da {
    height: 100%;
    width: 100%;
    grid-area: a;
    background-color: #ff0;
  }
  .db {
    height: 100%;
    width: 100%;
    grid-area: b;
    background-color: #ff0;
  }
  .dc {
    height: 100%;
    width: 100%;
    grid-area: c;
    background-color: #ff0;
  }
  .dd {
    height: 100%;
    width: 100%;
    grid-area: d;
    background-color: #ff0;
  }
  .de {
    height: 100%;
    width: 100%;
    grid-area: e;
    background-color: #d3d3d3;
  }
  .df {
    height: 100%;
    width: 100%;
    grid-area: f;
    background-color: #d3d3d3;
  }
  .e {
    height: 100%;
    width: 100%;
    grid-area: e;
    background-color: grey;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(15, 1fr);
    grid-template-areas:
    ' h . . . . . . . . . . . . . i '
    ' . . . . . . . e . . . . . . . '
    ' . . . . . . . e . . . . . . . '
    ' . . . . . . . e . . . . . . . '
    ' . . . . . . . . . . . . . . . '
    ' . . . . . . . f . . . . . . . '
    ' . . . . . . . f . . . . . . . '
    ' . a a a . b b f c c . d d d . '
    ' . . . . . . . f . . . . . . . '
    ' . . . . . . . f . . . . . . . '
    ' . . . . . . . . . . . . . . . '
    ' . . . . . . . g . . . . . . . '
    ' . . . . . . . g . . . . . . . '
    ' . . . . . . . g . . . . . . . '
    ' j . . . . . . . . . . . . . k ';
  }
  .ea {
    height: 100%;
    width: 100%;
    grid-area: a;
    background-color: #ff0;
  }
  .eb {
    height: 100%;
    width: 100%;
    grid-area: b;
    background-color: #ff0;
  }
  .ec {
    height: 100%;
    width: 100%;
    grid-area: c;
    background-color: #ff0;
  }
  .ed {
    height: 100%;
    width: 100%;
    grid-area: d;
    background-color: #ff0;
  }
  .ee {
    height: 100%;
    width: 100%;
    grid-area: e;
    background-color: #ff0;
  }
  .ef {
    height: 100%;
    width: 100%;
    grid-area: f;
    background-color: #ff0;
  }
  .eg {
    height: 100%;
    width: 100%;
    grid-area: g;
    background-color: #ff0;
  }
  .eh {
    height: 100%;
    width: 100%;
    grid-area: h;
    background-color: #d3d3d3;
  }
  .ei {
    height: 100%;
    width: 100%;
    grid-area: i;
    background-color: #d3d3d3;
  }
  .ej {
    height: 100%;
    width: 100%;
    grid-area: j;
    background-color: #d3d3d3;
  }
  .ek {
    height: 100%;
    width: 100%;
    grid-area: k;
    background-color: #d3d3d3;
  }
  .f {
    height: 100%;
    width: 100%;
    border-right: 1px solid grey;
    grid-area: f;
    background-color: grey;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(15, 1fr);
    grid-template-areas: ' e e e e e e e e e e e e e e e ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' a a a . b b b . c c c . d d d ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' f f f f f f f f f f f f f f f ';
  }
  .fa {
    height: 100%;
    width: 100%;
    grid-area: a;
    background-color: #ff0;
  }
  .fb {
    height: 100%;
    width: 100%;
    grid-area: b;
    background-color: #ff0;
  }
  .fc {
    height: 100%;
    width: 100%;
    grid-area: c;
    background-color: #ff0;
  }
  .fd {
    height: 100%;
    width: 100%;
    grid-area: d;
    background-color: #ff0;
  }
  .fe {
    height: 100%;
    width: 100%;
    grid-area: e;
    background-color: #d3d3d3;
  }
  .ff {
    height: 100%;
    width: 100%;
    grid-area: f;
    background-color: #d3d3d3;
  }
  .g {
    height: 100%;
    width: 100%;
    border-left: 1px solid #56b000;
    border-bottom: 1px solid #56b000;
    border-radius: 1px;
    grid-area: g;
    background-color: #56b000;
  }
  .h {
    height: 100%;
    width: 100%;
    border-bottom: 1px solid grey;
    grid-area: h;
    background-color: grey;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-template-rows: repeat(15, 1fr);
    grid-template-areas: ' e . . . . . . a . . . . . . f ' ' e . . . . . . a . . . . . . f ' ' e . . . . . . a . . . . . . f ' ' e . . . . . . . . . . . . . f ' ' e . . . . . . b . . . . . . f ' ' e . . . . . . b . . . . . . f ' ' e . . . . . . b . . . . . . f ' ' e . . . . . . . . . . . . . f ' ' e . . . . . . c . . . . . . f ' ' e . . . . . . c . . . . . . f ' ' e . . . . . . c . . . . . . f ' ' e . . . . . . . . . . . . . f ' ' e . . . . . . d . . . . . . f ' ' e . . . . . . d . . . . . . f ' ' e . . . . . . d . . . . . . f ';
  }
  .ha {
    height: 100%;
    width: 100%;
    grid-area: a;
    background-color: #ff0;
  }
  .hb {
    height: 100%;
    width: 100%;
    grid-area: b;
    background-color: #ff0;
  }
  .hc {
    height: 100%;
    width: 100%;
    grid-area: c;
    background-color: #ff0;
  }
  .hd {
    height: 100%;
    width: 100%;
    grid-area: d;
    background-color: #ff0;
  }
  .he {
    height: 100%;
    width: 100%;
    grid-area: e;
    background-color: #d3d3d3;
  }
  .hf {
    height: 100%;
    width: 100%;
    grid-area: f;
    background-color: lightgray;
  }
  .i {
    height: 100%;
    width: 100%;
    border-right: 1px solid #56b000;
    border-bottom: 1px solid #56b000;
    border-radius: 1px;
    grid-area: i;
    background-color: #56b000;
  }
  @keyframes bldg-anim {
    0% {
      transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(100px)
        translateX(100px);
    }
    25% {
      transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(100px)
        translateX(100px);
    }
    50% {
      transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(100px)
        translateX(100px);
    }
    75% {
      transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(100px)
        translateX(100px);
    }
  }
  .bldg {
    width: 80px;
    height: 200px;
    position: absolute;
    bottom: 100px;
    transform-style: preserve-3d;
    transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(100px)
      translateZ(100px);
    animation: bldg-anim 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .bldg-a {
    height: 200px;
    width: 80px;
    border: 1px solid #000;
    background-color: darkgrey;
    position: absolute;
    transform: rotateY(0deg) translateZ(40px) translateY(20px);
    display: grid;
    grid-template-rows: repeat(17, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas: ' . . . . . . . . . . ' ' . . a a . . b b . . ' ' . . a a . . b b . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . c c . . d d . . ' ' . . c c . . d d . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . e e . . f f . . ' ' . . e e . . f f . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . g g . . h h . . ' ' . . g g . . h h . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ';
  }
  .bldg-a-wa {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: a;
  }
  .bldg-a-wb {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: b;
  }
  .bldg-a-wc {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: c;
  }
  .bldg-a-wd {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: d;
  }
  .bldg-a-we {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: e;
  }
  .bldg-a-wf {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: f;
  }
  .bldg-a-wg {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: g;
  }
  .bldg-a-wh {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: h;
  }
  .bldg-b {
    height: 200px;
    width: 80px;
    border: 1px solid #000;
    background-color: darkgrey;
    position: absolute;
    transform: rotateY(180deg) translateZ(40px) translateY(20px);
    display: grid;
    grid-template-rows: repeat(17, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas: ' . . . . . . . . . . ' ' . . a a . . b b . . ' ' . . a a . . b b . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . c c . . d d . . ' ' . . c c . . d d . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . e e . . f f . . ' ' . . e e . . f f . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . g g . . h h . . ' ' . . g g . . h h . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ';
  }
  .bldg-b-wa {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: a;
  }
  .bldg-b-wb {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: b;
  }
  .bldg-b-wc {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: c;
  }
  .bldg-b-wd {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: d;
  }
  .bldg-b-we {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: e;
  }
  .bldg-b-wf {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: f;
  }
  .bldg-b-wg {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: g;
  }
  .bldg-b-wh {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: h;
  }
  .bldg-c {
    height: 200px;
    width: 80px;
    border: 1px solid #000;
    background-color: darkgrey;
    position: absolute;
    transform: rotateY(-90deg) translateZ(40px) translateY(20px);
    display: grid;
    grid-template-rows: repeat(17, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas: ' . . . . g g . . . . ' ' . . . . g g . . . . ' ' . . . . g g . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . a a . . b b . . ' ' . . a a . . b b . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . c c . . d d . . ' ' . . c c . . d d . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . e e . . f f . . ' ' . . e e . . f f . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ';
  }
  .bldg-c-wa {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: a;
  }
  .bldg-c-wb {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: b;
  }
  .bldg-c-wc {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: c;
  }
  .bldg-c-wd {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: d;
  }
  .bldg-c-we {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: e;
  }
  .bldg-c-wf {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: f;
  }
  .bldg-c-d {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #708090;
    grid-area: g;
  }
  .bldg-d {
    height: 200px;
    width: 80px;
    border: 1px solid #000;
    background-color: darkgrey;
    position: absolute;
    transform: rotateY(90deg) translateZ(40px) translateY(20px);
    display: grid;
    grid-template-rows: repeat(17, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas: ' . . . . . . . . . . ' ' . . a a . . b b . . ' ' . . a a . . b b . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . c c . . d d . . ' ' . . c c . . d d . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . e e . . f f . . ' ' . . e e . . f f . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . g g . . h h . . ' ' . . g g . . h h . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ';
  }
  .bldg-d-wa {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: a;
  }
  .bldg-d-wb {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: b;
  }
  .bldg-d-wc {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: c;
  }
  .bldg-d-wd {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: d;
  }
  .bldg-d-we {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: e;
  }
  .bldg-d-wf {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: f;
  }
  .bldg-d-wg {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: g;
  }
  .bldg-d-wh {
    height: 100%;
    width: 100%;
    border: 1px solid grey;
    background-color: #d3d3d3;
    grid-area: h;
  }
  .bldg-sign {
    height: 35px;
    width: 40px;
    border: 4px solid #f7fbf5;
    border-radius: 50%;
    box-shadow: 1px 1px 0 #b32d3b, -1px 1px 0 #b32d3b, 1px -1px 0 #b32d3b,
      -1px -1px 0 #b32d3b;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    transform: rotateY(-90deg) translateZ(0px) translateY(223px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bldg-sign-text {
    text-align: center;
    color: #b32d3b;
    font-size: 13px;
    text-shadow: 1px 1px 0 black, -1px 1px 0 black, 1px -1px 0 black,
      -1px -1px 0 #000;
    transform: rotateZ(180deg);
    font-family: 'Jua', sans-serif;
  }
  .bldg-sign-pole-a {
    height: 30px;
    width: 3px;
    border-radius: 25%;
    background-color: grey;
    position: absolute;
    transform: translateZ(16px) translateY(214px) translateX(29px)
      rotateZ(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bldg-sign-pole-b {
    height: 30px;
    width: 3px;
    border-radius: 25%;
    background-color: grey;
    position: absolute;
    transform: translateZ(-16px) translateY(214px) translateX(29px)
      rotateZ(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @keyframes stop-a-anim {
    0% {
      transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(50px)
        translateX(60px);
    }
    25% {
      transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(50px)
        translateX(60px);
    }
    50% {
      transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(50px)
        translateX(60px);
    }
    75% {
      transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(50px)
        translateX(60px);
    }
  }
  @keyframes stop-a-index {
    0% {
      z-index: 3;
    }
    25% {
      z-index: 0;
    }
    50% {
      z-index: -2;
    }
    75% {
      z-index: -2;
    }
  }
  .stop-a {
    height: 35px;
    width: 5px;
    position: absolute;
    bottom: 100px;
    transform-style: preserve-3d;
    transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(50px)
      translateX(60px);
    animation: stop-a-anim 15s, stop-a-index 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 1;
  }
  .stop-aa {
    height: 35px;
    width: 2px;
    border: 1px solid grey;
    background-color: grey;
    position: absolute;
    transform: rotateY(0deg) translateZ(1px) translateY(20px);
  }
  .stop-ab {
    height: 35px;
    width: 2px;
    border: 1px solid grey;
    background-color: grey;
    position: absolute;
    transform: rotateY(180deg) translateZ(1px) translateY(20px);
  }
  .stop-ac {
    height: 35px;
    width: 2px;
    border: 1px solid grey;
    background-color: grey;
    position: absolute;
    transform: rotateY(-90deg) translateZ(1px) translateY(20px);
  }
  .stop-ad {
    height: 35px;
    width: 2px;
    border: 1px solid grey;
    background-color: grey;
    position: absolute;
    transform: rotateY(90deg) translateZ(1px) translateY(20px);
  }
  .stop-a-sign {
    height: 16px;
    width: 16px;
    background: transparent;
    position: relative;
    text-align: center;
    transform: rotateY(90deg) translateZ(-7px) translateY(53px);
    &:before {
      content: '';
      position: absolute;
      top: 1px;
      left: 0;
      border-bottom: 4.64px solid #b01c2e;
      border-left: 4.64px solid rgba(0, 0, 0, 0);
      border-right: 4.64px solid rgba(0, 0, 0, 0);
      width: 6.72px;
      height: 0;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: -1.9px;
      left: 0;
      border-top: 4.64px solid #b01c2e;
      border-left: 4.64px solid rgba(0, 0, 0, 0);
      border-right: 4.64px solid rgba(0, 0, 0, 0);
      width: 6.72px;
      height: 0;
    }
  }

  @keyframes stop-a-sign-text-flip {
    0% {
      transform: rotateZ(180deg) rotateY(180deg);
    }
    70% {
      transform: rotateZ(180deg) rotateY(180deg);
    }
    71% {
      transform: rotateZ(180deg) rotateY(0deg);
    }
    99.8% {
      transform: rotateZ(180deg) rotateY(0deg);
    }
    99.9% {
      transform: rotateZ(180deg) rotateY(180deg);
    }
  }

  .stop-a-sign-text {
    height: 6.72px;
    width: 100%;
    display: inline-block;
    background: #b01c2e;
    font-size: 6px;
    color: white;
    animation: stop-a-sign-text-flip 15s infinite;
    font-family: Tahoma, Geneva, sans-serif;
    transform: rotateZ(180deg) rotateY(180deg);
  }
  @keyframes store-anim {
    0% {
      transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(120px)
        translateX(-120px);
    }
    25% {
      transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(120px)
        translateX(-120px);
    }
    50% {
      transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(120px)
        translateX(-120px);
    }
    75% {
      transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(120px)
        translateX(-120px);
    }
  }
  @keyframes store-index {
    0% {
      z-index: -1;
    }
    25% {
      z-index: 2;
    }
    50% {
      z-index: -1;
    }
    75% {
      z-index: -3;
    }
  }
  .store {
    height: 65px;
    width: 100px;
    position: absolute;
    bottom: 100px;
    transform-style: preserve-3d;
    transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(-120px)
      translateZ(120px);
    animation: store-anim 15s, store-index 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: -1;
  }
  .store-a {
    height: 65px;
    width: 100px;
    border: 1px solid #000;
    background-color: #b76b4d;
    position: absolute;
    transform: rotateY(0deg) translateZ(50px) translateY(20px);
    display: grid;
    grid-template-rows: repeat(16, 1fr);
    grid-template-columns: repeat(14, 1fr);
    grid-template-areas: ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . ';
  }
  .store-b {
    height: 65px;
    width: 100px;
    border: 1px solid #000;
    background-color: #b76b4d;
    position: absolute;
    transform: rotateY(180deg) translateZ(50px) translateY(20px);
    display: grid;
    grid-template-rows: repeat(16, 1fr);
    grid-template-columns: repeat(20, 1fr);
    grid-template-areas: ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . a a a a a a a a . . b b b b b b b b . ' ' . a a a a a a a a . . b b b b b b b b . ' ' . a a a a a a a a . . b b b b b b b b . ' ' . a a a a a a a a . . b b b b b b b b . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ' ' . . . . . . . . . . . . . . . . . . . . ';
  }
  .store-b-a {
    height: 100%;
    width: 100%;
    border: 1px solid slategrey;
    background-color: #add8e6;
    grid-area: a;
  }
  .store-b-b {
    height: 100%;
    width: 100%;
    border: 1px solid slategrey;
    background-color: #add8e6;
    grid-area: b;
  }
  .store-c {
    height: 65px;
    width: 100px;
    border: 1px solid #000;
    background-color: #b76b4d;
    position: absolute;
    transform: rotateY(-90deg) translateZ(50px) translateY(20px);
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas: ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ';
  }
  .store-d {
    height: 65px;
    width: 100px;
    border: 1px solid #000;
    background-color: #b76b4d;
    position: absolute;
    transform: rotateY(90deg) translateZ(50px) translateY(20px);
    display: grid;
    grid-template-rows: repeat(16, 1fr);
    grid-template-columns: repeat(20, 1fr);
    grid-template-areas: ' . . . . . . . . . b b . . . . . . . . .' ' . . . . . . . . . b b . . . . . . . . .' ' . . . . . . . . . b b . . . . . . . . .' ' . c c c c c c . . b b . . d d d d d d .' ' . c c c c c c . . b b . . d d d d d d .' ' . c c c c c c . . b b . . d d d d d d .' ' . c c c c c c . . . . . . d d d d d d .' ' . . . . . . . . . . . . . . . . . . . .' ' . . . . . . . . . . . . . . . . . . . .' ' . . . a a a a a a a a a a a a a a . . .' ' . . . a a a a a a a a a a a a a a . . .' ' . . . a a a a a a a a a a a a a a . . .' ' . . . a a a a a a a a a a a a a a . . .' ' . . . a a a a a a a a a a a a a a . . .' ' . . . . . . . . . . . . . . . . . . . .' ' . . . . . . . . . . . . . . . . . . . .';
  }
  .store-d-wa {
    height: 100%;
    width: 100%;
    border: 1px solid slategrey;
    background-color: #add8e6;
    grid-area: c;
  }
  .store-d-wb {
    height: 100%;
    width: 100%;
    border: 1px solid slategrey;
    background-color: #add8e6;
    grid-area: d;
  }
  .store-d-sign {
    height: 100%;
    width: 100%;
    border: 1px solid #7565a4;
    background-color: #45a4f5;
    grid-area: a;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .store-d-sign-text {
    transform: rotateZ(175deg);
    font-family: 'Jua', sans-serif;
    color: #c2b297;
    text-shadow: 1px 1px 0 #7b848c, -1px 1px 0 #7b848c, 1px -1px 0 #7b848c,
      -1px -1px 0 #7b848c;
    font-size: 8px;
    text-align: center;
    line-height: 95%;
  }
  .store-d-d {
    height: 100%;
    width: 100%;
    border: 1px solid #000;
    background-color: #51422f;
    grid-area: b;
  }
  .store-e {
    height: 100px;
    width: 100px;
    border: 1px solid #000;
    background-color: #b76b4d;
    position: absolute;
    transform: rotateX(-90deg) translateZ(35px);
    display: grid;
    grid-template-rows: repeat(8, 1fr);
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas: ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ' ' . . . . . . . . . . ';
  }
  @keyframes tree-anim {
    0% {
      transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-120px)
        translateX(-120px);
    }
    25% {
      transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-120px)
        translateX(-120px);
    }
    50% {
      transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(-120px)
        translateX(-120px);
    }
    75% {
      transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-120px)
        translateX(-120px);
    }
  }
  @keyframes tree-index {
    0% {
      z-index: 4;
    }
    25% {
      z-index: 1;
    }
    50% {
      z-index: -2;
    }
    75% {
      z-index: -4;
    }
  }
  .tree {
    height: 65px;
    width: 10px;
    position: absolute;
    bottom: 100px;
    display: flex;
    justify-content: center;
    transform-style: preserve-3d;
    transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(-120px)
      translateZ(-120px);
    animation: tree-anim 15s, tree-index 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 0;
  }
  .tree-a {
    height: 95px;
    width: 6px;
    border: 1px solid #000;
    background-color: #a0522d;
    position: absolute;
    transform: rotateY(0deg) translateZ(3px) translateY(20px);
  }
  .tree-b {
    height: 95px;
    width: 6px;
    border: 1px solid #000;
    background-color: #a0522d;
    position: absolute;
    transform: rotateY(180deg) translateZ(3px) translateY(20px);
  }
  .tree-c {
    height: 95px;
    width: 6px;
    border: 1px solid #000;
    background-color: #a0522d;
    position: absolute;
    transform: rotateY(-90deg) translateZ(3px) translateY(20px);
  }
  .tree-d {
    height: 95px;
    width: 6px;
    border: 1px solid #000;
    background-color: #a0522d;
    position: absolute;
    transform: rotateY(90deg) translateZ(3px) translateY(20px);
  }
  .tree-e {
    height: 120px;
    width: 120px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(-15px);
  }
  .tree-f {
    height: 110px;
    width: 110px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(0px);
  }
  .tree-g {
    height: 100px;
    width: 100px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(15px);
  }
  .tree-h {
    height: 90px;
    width: 90px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(30px);
  }
  .tree-i {
    height: 80px;
    width: 80px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(45px);
  }
  .tree-j {
    height: 70px;
    width: 70px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(60px);
  }
  .tree-k {
    height: 60px;
    width: 60px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(75px);
  }
  .tree-l {
    height: 50px;
    width: 50px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(90px);
  }
  .tree-m {
    height: 40px;
    width: 40px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(105px);
  }
  .tree-n {
    height: 30px;
    width: 30px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(120px);
  }
  .tree-o {
    height: 20px;
    width: 20px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(135px);
  }
  .tree-p {
    height: 10px;
    width: 10px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: green;
    position: absolute;
    transform: rotateX(-90deg) translateZ(150px);
  }

  @keyframes stop-b-anim {
    0% {
      transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-50px)
        translateX(-60px);
    }
    25% {
      transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-50px)
        translateX(-60px);
    }
    50% {
      transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(-50px)
        translateX(-60px);
    }
    75% {
      transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-50px)
        translateX(-60px);
    }
  }
  @keyframes stop-b-index {
    0% {
      z-index: 3;
    }
    25% {
      z-index: 0;
    }
    50% {
      z-index: -2;
    }
    75% {
      z-index: -2;
    }
  }
  .stop-b {
    height: 35px;
    width: 5px;
    position: absolute;
    bottom: 100px;
    transform-style: preserve-3d;
    transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-50px)
      translateX(-60px);
    animation: stop-b-anim 15s, stop-b-index 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 1;
  }
  .stop-ba {
    height: 35px;
    width: 2px;
    border: 1px solid grey;
    background-color: grey;
    position: absolute;
    transform: rotateY(0deg) translateZ(1px) translateY(20px);
  }
  .stop-bb {
    height: 35px;
    width: 2px;
    border: 1px solid grey;
    background-color: grey;
    position: absolute;
    transform: rotateY(180deg) translateZ(1px) translateY(20px);
  }
  .stop-bc {
    height: 35px;
    width: 2px;
    border: 1px solid grey;
    background-color: grey;
    position: absolute;
    transform: rotateY(-90deg) translateZ(1px) translateY(20px);
  }
  .stop-bd {
    height: 35px;
    width: 2px;
    border: 1px solid grey;
    background-color: grey;
    position: absolute;
    transform: rotateY(90deg) translateZ(1px) translateY(20px);
  }
  .stop-b-sign {
    height: 16px;
    width: 16px;
    background: transparent;
    position: relative;
    text-align: center;
    transform: rotateY(-90deg) translateZ(7px) translateY(53px);
    &:before {
      content: '';
      position: absolute;
      top: 1px;
      left: 0;
      border-bottom: 4.64px solid #b01c2e;
      border-left: 4.64px solid rgba(0, 0, 0, 0);
      border-right: 4.64px solid rgba(0, 0, 0, 0);
      width: 6.72px;
      height: 0;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: -1.9px;
      left: 0;
      border-top: 4.64px solid #b01c2e;
      border-left: 4.64px solid rgba(0, 0, 0, 0);
      border-right: 4.64px solid rgba(0, 0, 0, 0);
      width: 6.72px;
      height: 0;
    }
  }
  @keyframes stop-b-sign-text-flip {
    0% {
      transform: rotateZ(180deg) rotateY(0deg);
    }
    50% {
      transform: rotateZ(180deg) rotateY(0deg);
    }
    50.1% {
      transform: rotateZ(180deg) rotateY(180deg);
    }
    99.8% {
      transform: rotateZ(180deg) rotateY(180deg);
    }
    99.9% {
      transform: rotateZ(180deg) rotateY(0deg);
    }
  }
  .stop-b-sign-text {
    height: 6.72px;
    width: 100%;
    display: inline-block;
    background: #b01c2e;
    font-size: 6px;
    color: white;
    font-family: Tahoma, Geneva, sans-serif;
    animation: stop-b-sign-text-flip 15s infinite;
    transform: rotateZ(180deg) rotateY(0deg);
  }
  @keyframes pole-anim {
    0% {
      transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-100px)
        translateX(60px);
    }
    25% {
      transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-100px)
        translateX(60px);
    }
    50% {
      transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(-100px)
        translateX(60px);
    }
    75% {
      transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-100px)
        translateX(60px);
    }
  }
  @keyframes pole-index {
    0% {
      z-index: 1;
    }
    25% {
      z-index: -2;
    }
    50% {
      z-index: -2;
    }
    75% {
      z-index: -2;
    }
  }
  .pole {
    height: 45px;
    width: 5px;
    position: absolute;
    bottom: 100px;
    transform-style: preserve-3d;
    transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-100px)
      translateX(60px);
    animation: pole-anim 15s, pole-index 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 1;
  }
  .pole-a {
    height: 45px;
    width: 4px;
    border: 1px solid #000;
    background-color: grey;
    position: absolute;
    transform: rotateY(0deg) translateZ(2px) translateY(20px);
  }
  .pole-b {
    height: 45px;
    width: 4px;
    border: 1px solid #000;
    background-color: grey;
    position: absolute;
    transform: rotateY(180deg) translateZ(2px) translateY(20px);
  }
  .pole-c {
    height: 45px;
    width: 4px;
    border: 1px solid #000;
    background-color: grey;
    position: absolute;
    transform: rotateY(-90deg) translateZ(2px) translateY(20px);
  }
  .pole-d {
    height: 45px;
    width: 4px;
    border: 1px solid #000;
    background-color: grey;
    position: absolute;
    transform: rotateY(90deg) translateZ(2px) translateY(20px);
  }

  @keyframes pole-sign-anim {
    0% {
      transform: rotateY(90deg) translateZ(-10px) translateY(65px);
    }
    25% {
      transform: rotateY(90deg) translateZ(-10px) translateY(65px);
    }
    40% {
      transform: rotateY(90deg) translateZ(-10px) translateY(65px);
    }
    41% {
      transform: rotateY(-90deg) translateZ(10px) translateY(65px);
    }
    99.8% {
      transform: rotateY(-90deg) translateZ(10px) translateY(65px);
    }
    99.9% {
      transform: rotateY(90deg) translateZ(-10px) translateY(65px);
    }
  }

  .pole-sign {
    height: 15px;
    width: 25px;
    border: 1px solid #000;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    animation: pole-sign-anim 15s infinite;
    transform: rotateY(90deg) translateZ(-10px) translateY(65px);
  }
  .pole-sign-text {
    font-size: 12px;
    color: black;
    font-family: Tahoma, Geneva, sans-serif;
    transform: rotateZ(180deg) rotateY(180deg);
  }
  @keyframes bus-anim {
    0% {
      transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-140px)
        translateX(80px);
    }
    25% {
      transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-140px)
        translateX(80px);
    }
    50% {
      transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(-140px)
        translateX(80px);
    }
    75% {
      transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-140px)
        translateX(80px);
    }
  }
  @keyframes bus-index {
    0% {
      z-index: 2;
    }
    25% {
      z-index: -3;
    }
    50% {
      z-index: -3;
    }
    75% {
      z-index: -3;
    }
    90% {
      z-index: 2;
    }
  }
  .bus-stop {
    height: 40px;
    width: 66px;
    position: absolute;
    bottom: 100px;
    transform-style: preserve-3d;
    transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-140px)
      translateX(80px);
    animation: bus-anim 15s, bus-index 15s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 2;
  }
  .bus-stop-a {
    height: 40px;
    width: 30px;
    border: 1px solid #000;
    background-color: #dcdcdc;
    position: absolute;
    transform: rotateY(0deg) translateZ(33px) translateY(20px);
  }
  .bus-stop-b {
    height: 40px;
    width: 30px;
    border: 1px solid #000;
    background-color: #dcdcdc;
    position: absolute;
    transform: rotateY(180deg) translateZ(33px) translateY(20px);
  }
  .bus-stop-c {
    height: 30px;
    width: 66px;
    border: 1px solid #000;
    background-color: #dcdcdc;
    position: absolute;
    transform: rotateZ(-90deg) rotateY(-90deg) translateZ(45px)
      translateY(-18px);
  }
  .bus-stop-d {
    height: 40px;
    width: 66px;
    border: 1px solid #000;
    background-color: #dcdcdc;
    position: absolute;
    transform: rotateY(90deg) translateZ(-3px) translateY(20px);
  }

  @media (max-width: 359px) {
    .container {
      width: 200px;
      height: 200px;
    }

    #cube figure {
      width: 196px;
      height: 196px;
    }
    #cube .left {
      height: 10px;
      transform: rotateY(-90deg) translateZ(98px) translateY(30px);
    }
    #cube .right {
      height: 10px;
      transform: rotateY(90deg) translateZ(98px) translateY(30px);
    }
    #cube .front {
      height: 10px;
      transform: rotateY(0deg) translateZ(98px) translateY(30px);
    }
    #cube .back {
      height: 10px;
      transform: rotateX(180deg) translateZ(98px) translateY(-30px);
    }
    #cube .top {
      transform: rotateX(90deg) translateZ(100px);
    }
    #cube .bottom {
      transform: rotateX(-90deg) translateZ(-58.5px);
    }
    @keyframes bldg-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(50px)
          translateX(50px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(50px)
          translateX(50px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(50px)
          translateX(50px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(50px)
          translateX(50px);
      }
    }
    .bldg {
      width: 40px;
      height: 100px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(50px)
        translateZ(50px);
    }
    .bldg-a {
      width: 40px;
      height: 100px;
      transform: rotateY(0deg) translateZ(20px) translateY(20px);
    }
    .bldg-b {
      width: 40px;
      height: 100px;
      transform: rotateY(180deg) translateZ(20px) translateY(20px);
    }
    .bldg-c {
      width: 40px;
      height: 100px;
      transform: rotateY(-90deg) translateZ(20px) translateY(20px);
    }
    .bldg-d {
      width: 40px;
      height: 100px;
      transform: rotateY(90deg) translateZ(20px) translateY(20px);
    }
    .bldg-sign {
      height: 17px;
      width: 20px;
      border: 1px solid #f7fbf5;
      transform: rotateY(-90deg) translateZ(0px) translateY(120px);
    }
    .bldg-sign-text {
      color: black;
      font-size: 6px;
      text-shadow: 0 0;
    }
    .bldg-sign-pole-a {
      height: 15px;
      width: 1px;
      transform: translateZ(9px) translateY(115px) translateX(15px)
        rotateZ(45deg);
    }
    .bldg-sign-pole-b {
      height: 15px;
      width: 1px;
      transform: translateZ(-9px) translateY(115px) translateX(15px)
        rotateZ(45deg);
    }
    @keyframes stop-a-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(28px)
          translateX(24px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(28px)
          translateX(24px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(28px)
          translateX(24px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(28px)
          translateX(24px);
      }
    }
    .stop-a {
      height: 17px;
      width: 2px;
      bottom: 30px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(28px)
        translateX(24px);
    }
    .stop-aa {
      height: 17px;
      width: 0.5px;
      transform: rotateY(0deg) translateZ(0.5px) translateY(10px);
    }
    .stop-ab {
      height: 17px;
      width: 0.5px;
      transform: rotateY(180deg) translateZ(0.5px) translateY(10px);
    }
    .stop-ac {
      height: 17px;
      width: 0.5px;
      transform: rotateY(-90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-ad {
      height: 17px;
      width: 0.5px;
      transform: rotateY(90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-a-sign {
      height: 8px;
      width: 8px;
      transform: rotateY(90deg) translateZ(-3px) translateY(25px);
      &:before {
        border-bottom: 2.32px solid #b01c2e;
        border-left: 2.32px solid rgba(0, 0, 0, 0);
        border-right: 2.32px solid rgba(0, 0, 0, 0);
        width: 3.86px;
      }
      &:after {
        bottom: -1px;
        border-top: 2.32px solid #b01c2e;
        border-left: 2.32px solid rgba(0, 0, 0, 0);
        border-right: 2.32px solid rgba(0, 0, 0, 0);
        width: 3.86px;
      }
    }
    .stop-a-sign-text {
      height: 3.86px;
      font-size: 3px;
      position: relative;
      top: -6px;
    }
    @keyframes store-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(60px)
          translateX(-60px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(60px)
          translateX(-60px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(60px)
          translateX(-60px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(60px)
          translateX(-60px);
      }
    }
    .store {
      height: 32px;
      width: 50px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(-60px)
        translateZ(60px);
    }
    .store-a {
      height: 32px;
      width: 50px;
      transform: rotateY(0deg) translateZ(25px) translateY(20px);
    }
    .store-b {
      height: 32px;
      width: 50px;
      transform: rotateY(180deg) translateZ(25px) translateY(20px);
    }
    .store-c {
      height: 32px;
      width: 50px;
      transform: rotateY(-90deg) translateZ(25px) translateY(20px);
    }
    .store-d {
      height: 32px;
      width: 50px;
      transform: rotateY(90deg) translateZ(25px) translateY(20px);
    }
    .store-e {
      height: 50px;
      width: 50px;
      transform: rotateX(-90deg) translateZ(27px);
    }
    .store-d-sign-text {
      font-size: 4px;
    }
    @keyframes tree-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-60px)
          translateX(-60px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-60px)
          translateX(-60px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-60px) translateX(-60px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-60px)
          translateX(-60px);
      }
    }
    .tree {
      height: 32px;
      width: 5px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(-60px)
        translateZ(-60px);
    }
    .tree-a {
      height: 42px;
      width: 3px;
      transform: rotateY(0deg) translateZ(1.5px) translateY(20px);
    }
    .tree-b {
      height: 42px;
      width: 3px;
      transform: rotateY(180deg) translateZ(1.5px) translateY(20px);
    }
    .tree-c {
      height: 42px;
      width: 3px;
      transform: rotateY(-90deg) translateZ(1.5px) translateY(20px);
    }
    .tree-d {
      height: 42px;
      width: 3px;
      transform: rotateY(90deg) translateZ(1.5px) translateY(20px);
    }
    .tree-e {
      height: 60px;
      width: 60px;
      transform: rotateX(-90deg) translateZ(0px);
    }
    .tree-f {
      height: 55px;
      width: 55px;
      transform: rotateX(-90deg) translateZ(6px);
    }
    .tree-g {
      height: 50px;
      width: 50px;
      transform: rotateX(-90deg) translateZ(12px);
    }
    .tree-h {
      height: 45px;
      width: 45px;
      transform: rotateX(-90deg) translateZ(18px);
    }
    .tree-i {
      height: 40px;
      width: 40px;
      transform: rotateX(-90deg) translateZ(24px);
    }
    .tree-j {
      height: 35px;
      width: 35px;
      transform: rotateX(-90deg) translateZ(30px);
    }
    .tree-k {
      height: 30px;
      width: 30px;
      transform: rotateX(-90deg) translateZ(36px);
    }
    .tree-l {
      height: 25px;
      width: 25px;
      transform: rotateX(-90deg) translateZ(42px);
    }
    .tree-m {
      height: 20px;
      width: 20px;
      transform: rotateX(-90deg) translateZ(48px);
    }
    .tree-n {
      height: 15px;
      width: 15px;
      transform: rotateX(-90deg) translateZ(54px);
    }
    .tree-o {
      height: 10px;
      width: 10px;
      transform: rotateX(-90deg) translateZ(60px);
    }
    .tree-p {
      height: 5px;
      width: 5px;
      transform: rotateX(-90deg) translateZ(66px);
    }
    @keyframes stop-b-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-28px)
          translateX(-24px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-28px)
          translateX(-24px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-28px) translateX(-24px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-28px)
          translateX(-24px);
      }
    }
    .stop-b {
      height: 17px;
      width: 2px;
      bottom: 30px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-28px)
        translateX(-24px);
    }
    .stop-ba {
      height: 17px;
      width: 0.5px;
      transform: rotateY(0deg) translateZ(0.5px) translateY(10px);
    }
    .stop-bb {
      height: 17px;
      width: 0.5px;
      transform: rotateY(180deg) translateZ(0.5px) translateY(10px);
    }
    .stop-bc {
      height: 17px;
      width: 0.5px;
      transform: rotateY(-90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-bd {
      height: 17px;
      width: 0.5px;
      transform: rotateY(90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-b-sign {
      height: 8px;
      width: 8px;
      transform: rotateY(90deg) translateZ(-3px) translateY(25px);
      &:before {
        border-bottom: 2.32px solid #b01c2e;
        border-left: 2.32px solid rgba(0, 0, 0, 0);
        border-right: 2.32px solid rgba(0, 0, 0, 0);
        width: 3.86px;
      }
      &:after {
        bottom: -1px;
        border-top: 2.32px solid #b01c2e;
        border-left: 2.32px solid rgba(0, 0, 0, 0);
        border-right: 2.32px solid rgba(0, 0, 0, 0);
        width: 3.86px;
      }
    }
    .stop-b-sign-text {
      height: 3.86px;
      font-size: 3px;
      position: relative;
      top: -6px;
    }
    @keyframes pole-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-50px)
          translateX(30px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-50px)
          translateX(30px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-50px) translateX(30px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-50px)
          translateX(30px);
      }
    }
    .pole {
      height: 22px;
      width: 2px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-50px)
        translateX(30px);
    }
    .pole-a {
      height: 22px;
      width: 2px;
      border: 0;
      transform: rotateY(0deg) translateZ(1px) translateY(20px);
    }
    .pole-b {
      height: 22px;
      width: 2px;
      border: 0;
      transform: rotateY(180deg) translateZ(1px) translateY(20px);
    }
    .pole-c {
      height: 22px;
      width: 2px;
      border: 0;
      transform: rotateY(-90deg) translateZ(1px) translateY(20px);
    }
    .pole-d {
      height: 22px;
      width: 2px;
      border: 0;
      transform: rotateY(90deg) translateZ(1px) translateY(20px);
    }
    @keyframes pole-sign-anim {
      0% {
        transform: rotateY(90deg) translateZ(-5px) translateY(40px);
      }
      25% {
        transform: rotateY(90deg) translateZ(-5px) translateY(40px);
      }
      40% {
        transform: rotateY(90deg) translateZ(-5px) translateY(40px);
      }
      41% {
        transform: rotateY(-90deg) translateZ(5px) translateY(40px);
      }
      99.8% {
        transform: rotateY(-90deg) translateZ(5px) translateY(40px);
      }
      99.9% {
        transform: rotateY(90deg) translateZ(-5px) translateY(40px);
      }
    }
    .pole-sign {
      height: 8px;
      width: 12.5px;
      transform: rotateY(90deg) translateZ(-5px) translateY(40px);
    }
    .pole-sign-text {
      font-size: 6px;
    }
    @keyframes bus-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-70px)
          translateX(40px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-70px)
          translateX(40px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-70px) translateX(40px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-70px)
          translateX(40px);
      }
    }
    .bus-stop {
      height: 20px;
      width: 33px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-70px)
        translateX(40px);
    }
    .bus-stop-a {
      height: 20px;
      width: 15px;
      transform: rotateY(0deg) translateZ(16.5px) translateY(20px);
    }
    .bus-stop-b {
      height: 20px;
      width: 15px;
      transform: rotateY(180deg) translateZ(16.5px) translateY(20px);
    }
    .bus-stop-c {
      height: 15px;
      width: 33px;
      transform: rotateZ(-90deg) rotateY(-90deg) translateZ(32.5px)
        translateY(-9px);
    }
    .bus-stop-d {
      height: 20px;
      width: 33px;
      transform: rotateY(90deg) translateZ(-2px) translateY(20px);
    }
  }
  @media (min-width: 360px) and (max-width: 767px) {
    .container {
      width: 250px;
      height: 250px;
    }

    #cube figure {
      width: 246px;
      height: 246px;
    }
    #cube .left {
      height: 10px;
      transform: rotateY(-90deg) translateZ(122.5px) translateY(30px);
    }
    #cube .right {
      height: 10px;
      transform: rotateY(90deg) translateZ(122.5px) translateY(30px);
    }
    #cube .front {
      height: 10px;
      transform: rotateY(0deg) translateZ(122.5px) translateY(30px);
    }
    #cube .back {
      height: 10px;
      transform: rotateX(180deg) translateZ(122.5px) translateY(-30px);
    }
    #cube .top {
      transform: rotateX(90deg) translateZ(120px);
    }
    #cube .bottom {
      transform: rotateX(-90deg) translateZ(-83.5px);
    }
    @keyframes bldg-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(62.5px)
          translateX(62.5px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn)
          translateZ(62.5px) translateX(62.5px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(62.5px) translateX(62.5px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn)
          translateZ(62.5px) translateX(62.5px);
      }
    }
    .bldg {
      width: 50px;
      height: 125px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(62.5px)
        translateZ(62.5px);
    }
    .bldg-a {
      width: 50px;
      height: 125px;
      transform: rotateY(0deg) translateZ(25px) translateY(20px);
    }
    .bldg-b {
      width: 50px;
      height: 125px;
      transform: rotateY(180deg) translateZ(25px) translateY(20px);
    }
    .bldg-c {
      width: 50px;
      height: 125px;
      transform: rotateY(-90deg) translateZ(25px) translateY(20px);
    }
    .bldg-d {
      width: 50px;
      height: 125px;
      transform: rotateY(90deg) translateZ(25px) translateY(20px);
    }
    .bldg-sign {
      height: 21.25px;
      width: 25px;
      border: 1px solid #f7fbf5;
      transform: rotateY(-90deg) translateZ(0px) translateY(150px);
    }
    .bldg-sign-text {
      color: black;
      font-size: 8px;
      text-shadow: 0 0;
    }
    .bldg-sign-pole-a {
      height: 15px;
      width: 1px;
      transform: translateZ(10.25px) translateY(143.75px) translateX(17.75px)
        rotateZ(45deg);
    }
    .bldg-sign-pole-b {
      height: 15px;
      width: 1px;
      transform: translateZ(-10.25px) translateY(143.75px) translateX(17.75px)
        rotateZ(45deg);
    }
    @keyframes stop-a-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(31px)
          translateX(35px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(31px)
          translateX(35px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(31px)
          translateX(35px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(31px)
          translateX(35px);
      }
    }
    .stop-a {
      height: 21.25px;
      width: 2px;
      bottom: 29px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(31px)
        translateX(35px);
    }
    .stop-aa {
      height: 21.25px;
      width: 0.5px;
      transform: rotateY(0deg) translateZ(0.5px) translateY(10px);
    }
    .stop-ab {
      height: 21.25px;
      width: 0.5px;
      transform: rotateY(180deg) translateZ(0.5px) translateY(10px);
    }
    .stop-ac {
      height: 21.25px;
      width: 0.5px;
      transform: rotateY(-90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-ad {
      height: 21.25px;
      width: 0.5px;
      transform: rotateY(90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-a-sign {
      height: 10px;
      width: 10px;
      transform: rotateY(90deg) translateZ(-4px) translateY(30px);
      &:before {
        top: 0;
        border-bottom: 2.9px solid #b01c2e;
        border-left: 2.9px solid rgba(0, 0, 0, 0);
        border-right: 2.9px solid rgba(0, 0, 0, 0);
        width: 4.8px;
      }
      &:after {
        bottom: -1px;
        border-top: 2.9px solid #b01c2e;
        border-left: 2.9px solid rgba(0, 0, 0, 0);
        border-right: 2.9px solid rgba(0, 0, 0, 0);
        width: 4.8px;
      }
    }
    .stop-a-sign-text {
      height: 4.825px;
      width: 11px;
      font-size: 4px;
      position: relative;
      top: -5px;
      left: 0px;
    }
    @keyframes store-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(75px)
          translateX(-75px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(75px)
          translateX(-75px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(75px)
          translateX(-75px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(75px)
          translateX(-75px);
      }
    }
    .store {
      height: 40px;
      width: 62.5px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(-75px)
        translateZ(75px);
    }
    .store-a {
      height: 40px;
      width: 62.5px;
      transform: rotateY(0deg) translateZ(31.25px) translateY(20px);
    }
    .store-b {
      height: 40px;
      width: 62.5px;
      transform: rotateY(180deg) translateZ(31.25px) translateY(20px);
    }
    .store-c {
      height: 40px;
      width: 62.5px;
      transform: rotateY(-90deg) translateZ(31.25px) translateY(20px);
    }
    .store-d {
      height: 40px;
      width: 62.5px;
      transform: rotateY(90deg) translateZ(31.25px) translateY(20px);
    }
    .store-e {
      height: 62.5px;
      width: 62.5px;
      transform: rotateX(-90deg) translateZ(28px);
    }
    .store-d-sign-text {
      font-size: 4px;
    }
    @keyframes tree-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-75px)
          translateX(-75px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-75px)
          translateX(-75px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-75px) translateX(-75px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-75px)
          translateX(-75px);
      }
    }
    .tree {
      height: 40px;
      width: 5px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(-75px)
        translateZ(-75px);
    }
    .tree-a {
      height: 52.5px;
      width: 3px;
      transform: rotateY(0deg) translateZ(1.5px) translateY(20px);
    }
    .tree-b {
      height: 52.5px;
      width: 3px;
      transform: rotateY(180deg) translateZ(1.5px) translateY(20px);
    }
    .tree-c {
      height: 52.5px;
      width: 3px;
      transform: rotateY(-90deg) translateZ(1.5px) translateY(20px);
    }
    .tree-d {
      height: 52.5px;
      width: 3px;
      transform: rotateY(90deg) translateZ(1.5px) translateY(20px);
    }
    .tree-e {
      height: 60px;
      width: 60px;
      transform: rotateX(-90deg) translateZ(0px);
    }
    .tree-f {
      height: 55px;
      width: 55px;
      transform: rotateX(-90deg) translateZ(7px);
    }
    .tree-g {
      height: 50px;
      width: 50px;
      transform: rotateX(-90deg) translateZ(14px);
    }
    .tree-h {
      height: 45px;
      width: 45px;
      transform: rotateX(-90deg) translateZ(21px);
    }
    .tree-i {
      height: 40px;
      width: 40px;
      transform: rotateX(-90deg) translateZ(28px);
    }
    .tree-j {
      height: 35px;
      width: 35px;
      transform: rotateX(-90deg) translateZ(35px);
    }
    .tree-k {
      height: 30px;
      width: 30px;
      transform: rotateX(-90deg) translateZ(42px);
    }
    .tree-l {
      height: 25px;
      width: 25px;
      transform: rotateX(-90deg) translateZ(49px);
    }
    .tree-m {
      height: 20px;
      width: 20px;
      transform: rotateX(-90deg) translateZ(56px);
    }
    .tree-n {
      height: 15px;
      width: 15px;
      transform: rotateX(-90deg) translateZ(63px);
    }
    .tree-o {
      height: 10px;
      width: 10px;
      transform: rotateX(-90deg) translateZ(70px);
    }
    .tree-p {
      height: 5px;
      width: 5px;
      transform: rotateX(-90deg) translateZ(77px);
    }
    @keyframes stop-b-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-31px)
          translateX(-35px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-31px)
          translateX(-35px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-31px) translateX(-35px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-31px)
          translateX(-35px);
      }
    }
    .stop-b {
      height: 21.25px;
      width: 2px;
      bottom: 29px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-28px)
        translateX(-35px);
    }
    .stop-ba {
      height: 21.25px;
      width: 0.5px;
      transform: rotateY(0deg) translateZ(0.5px) translateY(10px);
    }
    .stop-bb {
      height: 21.25px;
      width: 0.5px;
      transform: rotateY(180deg) translateZ(0.5px) translateY(10px);
    }
    .stop-bc {
      height: 21.25px;
      width: 0.5px;
      transform: rotateY(-90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-bd {
      height: 21.25px;
      width: 0.5px;
      transform: rotateY(90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-b-sign {
      height: 10px;
      width: 10px;
      transform: rotateY(90deg) translateZ(-4px) translateY(30px);
      &:before {
        top: 0;
        border-bottom: 2.9px solid #b01c2e;
        border-left: 2.9px solid rgba(0, 0, 0, 0);
        border-right: 2.9px solid rgba(0, 0, 0, 0);
        width: 4.8px;
      }
      &:after {
        bottom: -1px;
        border-top: 2.9px solid #b01c2e;
        border-left: 2.9px solid rgba(0, 0, 0, 0);
        border-right: 2.9px solid rgba(0, 0, 0, 0);
        width: 4.8px;
      }
    }
    .stop-b-sign-text {
      height: 4.825px;
      width: 11px;
      font-size: 4px;
      position: relative;
      top: -5px;
      left: 0px;
    }
    @keyframes pole-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-50px)
          translateX(30px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-50px)
          translateX(30px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-50px) translateX(30px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-50px)
          translateX(30px);
      }
    }
    .pole {
      height: 27.5px;
      width: 2px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-50px)
        translateX(30px);
    }
    .pole-a {
      height: 27.5px;
      width: 2px;
      border: 0;
      transform: rotateY(0deg) translateZ(1px) translateY(20px);
    }
    .pole-b {
      height: 27.5px;
      width: 2px;
      border: 0;
      transform: rotateY(180deg) translateZ(1px) translateY(20px);
    }
    .pole-c {
      height: 27.5px;
      width: 2px;
      border: 0;
      transform: rotateY(-90deg) translateZ(1px) translateY(20px);
    }
    .pole-d {
      height: 27.5px;
      width: 2px;
      border: 0;
      transform: rotateY(90deg) translateZ(1px) translateY(20px);
    }
    @keyframes pole-sign-anim {
      0% {
        transform: rotateY(90deg) translateZ(-5px) translateY(48px);
      }
      25% {
        transform: rotateY(90deg) translateZ(-5px) translateY(48px);
      }
      40% {
        transform: rotateY(90deg) translateZ(-5px) translateY(48px);
      }
      41% {
        transform: rotateY(-90deg) translateZ(5px) translateY(48px);
      }
      99.8% {
        transform: rotateY(-90deg) translateZ(5px) translateY(48px);
      }
      99.9% {
        transform: rotateY(90deg) translateZ(-5px) translateY(48px);
      }
    }
    .pole-sign {
      height: 8px;
      width: 12.5px;
      transform: rotateY(90deg) translateZ(-5px) translateY(50px);
    }
    .pole-sign-text {
      font-size: 6px;
    }
    @keyframes bus-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-70px)
          translateX(50px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-70px)
          translateX(50px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-70px) translateX(50px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-70px)
          translateX(50px);
      }
    }
    .bus-stop {
      height: 25px;
      width: 41.25px;
      bottom: 20px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-70px)
        translateX(50px);
    }
    .bus-stop-a {
      height: 25px;
      width: 18.75px;
      transform: rotateY(0deg) translateZ(20.625px) translateY(20px);
    }
    .bus-stop-b {
      height: 25px;
      width: 18.75px;
      transform: rotateY(180deg) translateZ(20.625px) translateY(20px);
    }
    .bus-stop-c {
      height: 18.75px;
      width: 41.25px;
      transform: rotateZ(-90deg) rotateY(-90deg) translateZ(35.625px)
        translateY(-10px);
    }
    .bus-stop-d {
      height: 25px;
      width: 41.25px;
      transform: rotateY(90deg) translateZ(-2px) translateY(20px);
    }
  }
  @media (min-width: 2561px){
    .container {
      width: 800px;
      height: 800px;
    }

    #cube figure {
      width: 782px;
      height: 782px;
    }
    #cube .left {
      height: 40px;
      transform: rotateY(-90deg) translateZ(390px) translateY(200px);
    }
    #cube .right {
      height: 40px;
      transform: rotateY(90deg) translateZ(390px) translateY(200px);
    }
    #cube .front {
      height: 40px;
      transform: rotateY(0deg) translateZ(390px) translateY(200px);
    }
    #cube .back {
      height: 40px;
      transform: rotateX(180deg) translateZ(390px) translateY(-200px);
    }
    #cube .top {
      transform: rotateX(90deg) translateZ(290px);
    }
    #cube .bottom {
      transform: rotateX(-90deg) translateZ(-151px);
    }
    @keyframes bldg-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(230px)
          translateX(230px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn)
          translateZ(230px) translateX(230px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(230px) translateX(230px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn)
          translateZ(230px) translateX(230px);
      }
    }
    .bldg {
      width: 160px;
      height: 400px;
      bottom: 220px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(230px)
        translateZ(230px);
    }
    .bldg-a {
      width: 150px;
      height: 325px;
      transform: rotateY(0deg) translateZ(75px) translateY(20px);
    }
    .bldg-b {
      width: 150px;
      height: 325px;
      transform: rotateY(180deg) translateZ(75px) translateY(20px);
    }
    .bldg-c {
      width: 150px;
      height: 325px;
      transform: rotateY(-90deg) translateZ(75px) translateY(20px);
    }
    .bldg-d {
      width: 150px;
      height: 325px;
      transform: rotateY(90deg) translateZ(75px) translateY(20px);
    }
    .bldg-sign {
      height: 70px;
      width: 80px;
      transform: rotateY(-90deg) translateZ(0px) translateY(350px);
    }
    .bldg-sign-text {
      color: #b32d3b;
      font-size: 22px;
    }
    .bldg-sign-pole-a {
      height: 60px;
      width: 5px;
      transform: translateZ(38px) translateY(335px) translateX(60px)
        rotateZ(45deg);
    }
    .bldg-sign-pole-b {
      height: 60px;
      width: 5px;
      transform: translateZ(-38px) translateY(335px) translateX(60px)
        rotateZ(45deg);
    }
    @keyframes stop-a-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(100px)
          translateX(120px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(100px)
          translateX(120px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(100px)
          translateX(120px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(100px)
          translateX(120px);
      }
    }
    .stop-a {
      height: 70px;
      width: 10px;
      bottom: 230px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(100px)
        translateX(120px);
    }
    .stop-aa {
      height: 70px;
      width: 4px;
      transform: rotateY(0deg) translateZ(0.5px) translateY(10px);
    }
    .stop-ab {
      height: 70px;
      width: 4px;
      transform: rotateY(180deg) translateZ(0.5px) translateY(10px);
    }
    .stop-ac {
      height: 70px;
      width: 4px;
      transform: rotateY(-90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-ad {
      height: 70px;
      width: 4px;
      transform: rotateY(90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-a-sign {
      height: 32px;
      width: 32px;
      transform: rotateY(90deg) translateZ(-14px) translateY(106px);
      &:before {
        top: -26px;
        border-bottom: 9.28px solid #b01c2e;
        border-left: 9.28px solid rgba(0, 0, 0, 0);
        border-right: 9.28px solid rgba(0, 0, 0, 0);
        width: 13.44px;
      }
      &:after {
        bottom: 26.5px;
        border-top: 9.28px solid #b01c2e;
        border-left: 9.28px solid rgba(0, 0, 0, 0);
        border-right: 9.28px solid rgba(0, 0, 0, 0);
        width: 13.44px;
      }
    }
    .stop-a-sign-text {
      height: 13.44px;
      font-size: 12px;
      position: relative;
      top: -17px;
    }
    @keyframes store-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(240px)
          translateX(-300px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(240px)
          translateX(-300px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn) translateZ(240px)
          translateX(-300px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(240px)
          translateX(-300px);
      }
    }
    .store {
      height: 40px;
      width: 62.5px;
      bottom: 220px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(-300px)
        translateZ(240px);
    }
    .store-a {
      height: 130px;
      width: 200px;
      transform: rotateY(0deg) translateZ(100px) translateY(20px);
    }
    .store-b {
      height: 130px;
      width: 200px;
      transform: rotateY(180deg) translateZ(100px) translateY(20px);
    }
    .store-c {
      height: 130px;
      width: 200px;
      transform: rotateY(-90deg) translateZ(100px) translateY(20px);
    }
    .store-d {
      height: 130px;
      width: 200px;
      transform: rotateY(90deg) translateZ(100px) translateY(20px);
    }
    .store-e {
      height: 200px;
      width: 200px;
      transform: rotateX(-90deg) translateZ(50px);
    }
    .store-d-sign-text {
      font-size: 15px;
    }
    @keyframes tree-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-240px)
          translateX(-240px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-240px)
          translateX(-240px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-240px) translateX(-240px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-240px)
          translateX(-240px);
      }
    }
    .tree {
      height: 130px;
      width: 20px;
      bottom: 220px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateX(-240px)
        translateZ(-240px);
    }
    .tree-a {
      height: 190px;
      width: 10px;
      transform: rotateY(0deg) translateZ(5px) translateY(20px);
    }
    .tree-b {
      height: 190px;
      width: 10px;
      transform: rotateY(180deg) translateZ(5px) translateY(20px);
    }
    .tree-c {
      height: 190px;
      width: 10px;
      transform: rotateY(-90deg) translateZ(5px) translateY(20px);
    }
    .tree-d {
      height: 190px;
      width: 10px;
      transform: rotateY(90deg) translateZ(5px) translateY(20px);
    }
    .tree-e {
      height: 240px;
      width: 240px;
      transform: rotateX(-90deg) translateZ(-55px);
    }
    .tree-f {
      height: 220px;
      width: 220px;
      transform: rotateX(-90deg) translateZ(-30px);
    }
    .tree-g {
      height: 200px;
      width: 200px;
      transform: rotateX(-90deg) translateZ(-5px);
    }
    .tree-h {
      height: 180px;
      width: 180px;
      transform: rotateX(-90deg) translateZ(20px);
    }
    .tree-i {
      height: 160px;
      width: 160px;
      transform: rotateX(-90deg) translateZ(45px);
    }
    .tree-j {
      height: 140px;
      width: 140px;
      transform: rotateX(-90deg) translateZ(70px);
    }
    .tree-k {
      height: 120px;
      width: 120px;
      transform: rotateX(-90deg) translateZ(95px);
    }
    .tree-l {
      height: 100px;
      width: 100px;
      transform: rotateX(-90deg) translateZ(120px);
    }
    .tree-m {
      height: 80px;
      width: 80px;
      transform: rotateX(-90deg) translateZ(145px);
    }
    .tree-n {
      height: 60px;
      width: 60px;
      transform: rotateX(-90deg) translateZ(170px);
    }
    .tree-o {
      height: 40px;
      width: 40px;
      transform: rotateX(-90deg) translateZ(195px);
    }
    .tree-p {
      height: 20px;
      width: 20px;
      transform: rotateX(-90deg) translateZ(220px);
    }
    @keyframes stop-b-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-100px)
          translateX(-120px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-100px)
          translateX(-120px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-100px) translateX(-120px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-100px)
          translateX(-120px);
      }
    }
    .stop-b {
      height: 70px;
      width: 10px;
      bottom: 230px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-100px)
        translateX(-120px);
    }
    .stop-ba {
      height: 70px;
      width: 4px;
      transform: rotateY(0deg) translateZ(0.5px) translateY(10px);
    }
    .stop-bb {
      height: 70px;
      width: 4px;
      transform: rotateY(180deg) translateZ(0.5px) translateY(10px);
    }
    .stop-bc {
      height: 70px;
      width: 4px;
      transform: rotateY(-90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-bd {
      height: 70px;
      width: 4px;
      transform: rotateY(90deg) translateZ(0.5px) translateY(10px);
    }
    .stop-b-sign {
      height: 32px;
      width: 32px;
      transform: rotateY(90deg) translateZ(-14px) translateY(106px);
      &:before {
        top: -26px;
        border-bottom: 9.28px solid #b01c2e;
        border-left: 9.28px solid rgba(0, 0, 0, 0);
        border-right: 9.28px solid rgba(0, 0, 0, 0);
        width: 13.44px;
      }
      &:after {
        bottom: 26.5px;
        border-top: 9.28px solid #b01c2e;
        border-left: 9.28px solid rgba(0, 0, 0, 0);
        border-right: 9.28px solid rgba(0, 0, 0, 0);
        width: 13.44px;
      }
    }
    .stop-b-sign-text {
      height: 13.44px;
      font-size: 12px;
      position: relative;
      top: -17px;
    }
    @keyframes pole-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-200px)
          translateX(100px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-200px)
          translateX(100px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-200px) translateX(100px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-200px)
          translateX(100px);
      }
    }
    .pole {
      height: 90px;
      width: 10px;
      bottom: 220px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-200px)
        translateX(100px);
    }
    .pole-a {
      height: 90px;
      width: 8px;
      transform: rotateY(0deg) translateZ(4px) translateY(20px);
    }
    .pole-b {
      height: 90px;
      width: 8px;
      transform: rotateY(180deg) translateZ(4px) translateY(20px);
    }
    .pole-c {
      height: 90px;
      width: 8px;
      transform: rotateY(-90deg) translateZ(4px) translateY(20px);
    }
    .pole-d {
      height: 90px;
      width: 8px;
      transform: rotateY(90deg) translateZ(4px) translateY(20px);
    }
    @keyframes pole-sign-anim {
      0% {
        transform: rotateY(90deg) translateZ(-20px) translateY(110px);
      }
      25% {
        transform: rotateY(90deg) translateZ(-20px) translateY(110px);
      }
      40% {
        transform: rotateY(90deg) translateZ(-20px) translateY(110px);
      }
      41% {
        transform: rotateY(-90deg) translateZ(20px) translateY(110px);
      }
      99.8% {
        transform: rotateY(-90deg) translateZ(20px) translateY(110px);
      }
      99.9% {
        transform: rotateY(90deg) translateZ(-20px) translateY(110px);
      }
    }
    .pole-sign {
      height: 30px;
      width: 50px;
      transform: rotateY(90deg) translateZ(-20px) translateY(110px);
    }
    .pole-sign-text {
      font-size: 24px;
    }
    @keyframes bus-anim {
      0% {
        transform: rotateY(0deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-280px)
          translateX(160px);
      }
      25% {
        transform: rotateY(-90deg) rotate3d(0, 0, 1, -0.5turn) translateZ(-280px)
          translateX(160px);
      }
      50% {
        transform: rotateY(-180deg) rotate3d(1, 0, 0, -0.5turn)
          translateZ(-280px) translateX(160px);
      }
      75% {
        transform: rotateY(-270deg) rotate3d(0, 0, 1, 0.5turn) translateZ(-280px)
          translateX(160px);
      }
    }
    .bus-stop {
      height: 80px;
      width: 132px;
      bottom: 220px;
      transform: rotateY(-360deg) rotate3d(1, 0, 0, 0.5turn) translateZ(-280px)
        translateX(160px);
    }
    .bus-stop-a {
      height: 80px;
      width: 60px;
      transform: rotateY(0deg) translateZ(66px) translateY(20px);
    }
    .bus-stop-b {
      height: 80px;
      width: 60px;
      transform: rotateY(180deg) translateZ(66px) translateY(20px);
    }
    .bus-stop-c {
      height: 60px;
      width: 132px;
      transform: rotateZ(-90deg) rotateY(-90deg) translateZ(70px)
        translateY(-35px);
    }
    .bus-stop-d {
      height: 80px;
      width: 132px;
      transform: rotateY(90deg) translateZ(-6px) translateY(20px);
    }
  }
`;

export default AnimationCSS;
