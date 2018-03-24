import * as React from 'react';
import Link from '../Bits/Link';
import * as Actions from '../../common/actions';
import { connect } from 'react-redux';

class LogoutButton extends React.Component {
  _handleLogout = () => {
    this.props.dispatch(Actions.requestLogout());
  };

  render() {
    return <Link onClick={this._handleLogout}>» Log out</Link>;
  }
}

export default connect((state) => state)(LogoutButton);
