import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import * as Text from '../Bits/Text';

const Top = styled('header')`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 650px) {
    justify-content: center;
  }
`;

const title = css`
  min-width: 130px;
  margin-left: 20px;
  @media (min-width: 2559px) {
    font-size: 48px;
  }
  @media (min-width: 4559px) {
    margin-left: 80px;
    font-size: 128px;
  }
`;

class SubHeader extends Component {
  render() {
    return (
      <Top>
        <Text.Heading1 className={title}>{this.props.activePage}</Text.Heading1>
      </Top>
    );
  }
}

export default connect((state) => state)(SubHeader);
