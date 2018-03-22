import * as React from 'react';
import Document from '../Components/Document';
import LoginForm from '../Components/LoginForm';
import SignupForm from '../Components/SignupForm';
import withData from './withData';

class Index extends React.Component {
  renderLoggedIn = () => {
    return (
      <div>
        <p>logged in</p>
      </div>
    );
  };

  renderLoggedOut = () => {
    return [<LoginForm />, <SignupForm />];
  };

  render() {
    let subview = !this.props.isAuthenticated
      ? this.renderLoggedOut()
      : this.renderLoggedIn();

    return <Document>{subview}</Document>;
  }
}

export default withData({}, (state) => state)(Index);
