import * as React from 'react';
import styled from 'react-emotion';
import * as gtag from '../../utils/gtag';

const ArrowGrid = styled('div')`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: arrow;
`;

const ArrowWrap = styled('span')`
  cursor: pointer;
  font-size: 75px;
  &:hover {
    color: #72b597;
  }
  @media (min-width: 2559px) {
    font-size: 96px;
  }
  @media (min-width: 3839px) {
    font-size: 148px;
  }
  @media (min-width: 4559px) {
    font-size: 256px;
  }
`;

class HeaderArrow extends React.Component {
  _handleClick = () => {
    window.scrollTo(0, window.innerHeight);
    if (typeof window !== 'undefined') {
      gtag.event({
        action: 'used_arrow',
        category: 'Arrow',
        label: 'arrow',
      });
    }
  };
  render() {
    return (
      <ArrowGrid>
        <ArrowWrap onClick={this._handleClick}>&#65086;</ArrowWrap>
      </ArrowGrid>
    );
  }
}

export default HeaderArrow;
