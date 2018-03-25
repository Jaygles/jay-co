import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'react-emotion';
import * as Text from '../Bits/Text';

const Top = styled('header')`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
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
        {this.props.children}
      </Top>
    );
  }
}

export default connect((state) => state)(Header);
