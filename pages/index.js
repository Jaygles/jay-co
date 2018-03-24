import * as React from 'react';
import Document from '../Components/Document';
import LogoutButton from '../Components/Auth/LogoutButton';
import PostForm from '../Components/Posts/PostForm';
import SignUpForm from '../Components/Auth/SignupForm';
import Button from '../Components/Bits/Button';
import PostList from '../Components/Posts/PostList';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
import MainGrid from '../Components/Grids/MainGrid';
import * as Actions from '../common/actions';
import withData from '../higher-order/withData';
import SignupForm from '../Components/Auth/SignupForm';

class Index extends React.Component {
  renderLoggedIn = () => {
    return (
      <div>
        <Header />
        <MainGrid key="layout">
          <Nav isAuthenticated={this.props.isAuthenticated} />
          <PostList />
        </MainGrid>
      </div>
    );
  };

  renderLoggedOut = () => {
    return (
      <div>
        <Header />
        <MainGrid key="layout">
          <Nav />
          <PostList />
        </MainGrid>
      </div>
    );
  };

  render() {
    let subview = !this.props.isAuthenticated
      ? this.renderLoggedOut()
      : this.renderLoggedIn();

    return <Document>{subview}</Document>;
  }
}

export default withData({}, (state) => state)(Index);
