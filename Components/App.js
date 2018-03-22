import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <main>
        <SignupForm />
        <br />
        <LoginForm />
      </main>
    );
  }
}

export default connect((state) => state)(App);
