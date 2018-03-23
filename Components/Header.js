import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Text from '../Components/Text';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <Text.Heading1>
            <p>Jay-Co</p>
          </Text.Heading1>
        </div>
      </header>
    );
  }
}

export default connect((state) => state)(Header);
