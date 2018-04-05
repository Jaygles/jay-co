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

class TestArrow extends React.Component {
  _handleClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  render() {
    return (
      <ArrowGrid>
        <div onClick={this._handleClick}>&#65086;</div>
      </ArrowGrid>
    );
  }
}

export default TestArrow;
