import * as React from 'react';
import Input from '../Bits/Input';
import Button from '../Bits/Button';
import Border from '../Bits/Border';
import LoginGrid from '../Grids/LoginGrid';
import * as Actions from '../../common/actions';
import * as Strings from '../../common/strings';
import { connect } from 'react-redux';

class AuthLoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  _handleSubmit = (e) => {
    this.props.dispatch(Actions.requestLogin(this.state));
  };

  render() {
    return (
      <LoginGrid>
        <Input
          label="Username"
          autoFocus
          value={this.state.username}
          name="username"
          onChange={this._handleChange}
        />
        <Border />
        <Input
          label="Password"
          value={this.state.password}
          type="password"
          name="password"
          onChange={this._handleChange}
          onSubmit={this._handleSubmit}
        />
        <Border />
        <Button onClick={this._handleSubmit} style={{ marginTop: 16 }}>
          Log in
        </Button>
      </LoginGrid>
    );
  }
}

export default connect((state) => state)(AuthLoginForm);
