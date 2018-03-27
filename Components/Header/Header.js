import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import * as Text from '../Bits/Text';
import HeaderBorder from '../Bits/HeaderBorder';

const Top = styled('header')`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const title = css`
  margin-left: 20px;
`;

class Header extends Component {
  render() {
    return (
      <Top>
        <Text.Heading1 className={title}>
          <p>Jay-Co</p>
        </Text.Heading1>
        <HeaderBorder />
      </Top>
    );
  }
}

export default connect((state) => state)(Header);
