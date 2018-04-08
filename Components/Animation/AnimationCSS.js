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
    transform: rotateZ(0deg) translateY(0px);
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
    background-color: rgba(139, 69, 19, 1);
    border-bottom: 1.3px solid rgba(139, 69, 19, 1);
    transform: rotateY(0deg) translateZ(195px);
  }
  #cube .back {
    background-color: rgba(139, 69, 19, 1);
    border-top: 1.3px solid rgba(139, 69, 19, 1);
    transform: rotateX(180deg) translateZ(195px);
  }
  #cube .right {
    background-color: rgba(139, 69, 19, 1);
    border-bottom: 1.3px solid rgba(139, 69, 19, 1);
    transform: rotateY(90deg) translateZ(195px);
  }
  #cube .left {
    background-color: rgba(139, 69, 19, 1);
    border-bottom: 1.3px solid rgba(139, 69, 19, 1);
    transform: rotateY(-90deg) translateZ(195px);
  }
  #cube .top {
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 1;
    transform: rotateX(90deg) translateZ(255px);
  }
  #cube .bottom {
    background-color: #ffc0cb;
    transform: rotateX(-90deg) translateZ(-174.5px);
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
  #cube.show-front {
    transform: translateZ(-100px) rotateY(0deg);
  }
  #cube.show-back {
    transform: translateZ(-100px) rotateX(-180deg);
  }
  #cube.show-right {
    transform: translateZ(-100px) rotateY(-90deg);
  }
  #cube.show-left {
    transform: translateZ(-100px) rotateY(90deg);
  }
  #cube.show-top {
    transform: translateZ(-100px) rotateX(-90deg);
  }
  #cube.show-bottom {
    transform: translateZ(-100px) rotateX(90deg);
  }
  .a {
    height: 100%;
    width: 100%;
    border-left: 1px solid green;
    border-top: 1px solid green;
    border-radius: 1px;
    grid-area: a;
    background-color: green;
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
    border-right: 1px solid green;
    border-top: 1px solid green;
    border-radius: 1px;
    grid-area: c;
    background-color: green;
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
    grid-template-areas: ' h . . . . . . . . . . . . . i ' ' . . . . . . . e . . . . . . . ' ' . . . . . . . e . . . . . . . ' ' . . . . . . . e . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . f . . . . . . . ' ' . . . . . . . f . . . . . . . ' ' . a a a . b b f c c . d d d . ' ' . . . . . . . f . . . . . . . ' ' . . . . . . . f . . . . . . . ' ' . . . . . . . . . . . . . . . ' ' . . . . . . . g . . . . . . . ' ' . . . . . . . g . . . . . . . ' ' . . . . . . . g . . . . . . . ' ' j . . . . . . . . . . . . . k ';
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
    border-left: 1px solid green;
    border-bottom: 1px solid green;
    border-radius: 1px;
    grid-area: g;
    background-color: green;
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
    border-right: 1px solid green;
    border-bottom: 1px solid green;
    border-radius: 1px;
    grid-area: i;
    background-color: green;
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
    bottom: 0;
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
    height: 30px;
    width: 35px;
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
    transform: translateZ(16px) translateY(214px) translateX(27px)
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
    transform: translateZ(-16px) translateY(214px) translateX(27px)
      rotateZ(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
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
      z-index: -1;
    }
  }
  .store {
    height: 65px;
    width: 100px;
    position: absolute;
    bottom: 0;
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
    font-size: 9px;
    text-align: center;
    line-height: 80%;
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
      z-index: 0;
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
    bottom: 0;
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
    bottom: 0;
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
  .pole-sign {
    height: 15px;
    width: 25px;
    border: 1px solid #000;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotateY(90deg) translateZ(-10px) translateY(65px);
  }
  .pole-sign-text {
    font-size: 12px;
    font-family: Tahoma, Geneva, sans-serif;
    transform: rotateZ(180deg) rotateY(180deg);
  }
  .pole-sign-back {
    height: 15px;
    width: 25px;
    border: 1px solid #000;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: rotateY(90deg) translateZ(-10px) translateY(65px);
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
    bottom: 0;
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
`;

export default AnimationCSS;
