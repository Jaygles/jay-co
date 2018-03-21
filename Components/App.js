import React, { Component } from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

class App extends Component {
  render() {
    return (
      <main>
        <LoginForm />
      </main>
    );
  }
}

export default connect(state => state)(App);
