import * as React from 'react';
import Link from '../Bits/Link';
import * as Actions from '../../common/actions';
import { connect } from 'react-redux';
import { css } from 'react-emotion';

const logoutStyles = css`
  height: 20px;
  width: 60px;
  &:hover {
    cursor: pointer;
  }
`;

class LogoutButton extends React.Component {
  _handleLogout = () => {
    this.props.dispatch(Actions.requestLogout());
  };

  render() {
    return (
      <Link className={logoutStyles} onClick={this._handleLogout}>
        » Log out
      </Link>
    );
  }
}

export default connect((state) => state)(LogoutButton);
