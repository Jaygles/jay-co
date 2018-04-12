import * as React from 'react';
import styled from 'react-emotion';

const ArrowGrid = styled('div')`
  width: 100%;
  height: 50px;
  font-size: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: arrow;
`;

const ArrowWrap = styled('span')`
  cursor: pointer;
  &:hover {
    color: #72b597;
  }
`;

class HeaderArrow extends React.Component {
  _handleClick = () => {
    window.scrollTo(0, window.innerHeight);
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
