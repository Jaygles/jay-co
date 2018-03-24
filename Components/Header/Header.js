import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Text from '../Bits/Text';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <Text.Heading1>
            <p>Jay-Co</p>
          </Text.Heading1>
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default connect((state) => state)(Header);
