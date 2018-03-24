import * as React from 'react';
import Document from '../Components/Document';
import LogoutButton from '../Components/Auth/LogoutButton';
import PostForm from '../Components/Posts/PostForm';
import Button from '../Components/Bits/Button';
import PostList from '../Components/Posts/PostList';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
import MainGrid from '../Components/Grids/MainGrid';
import * as Actions from '../common/actions';
import withData from '../higher-order/withData';

class Index extends React.Component {
  state = {
    title: '',
    content: '',
  };

  _handleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  _handleChangeContent = (e) => {
    this.setState({ content: e.target.value });
  };

  _handleSave = () => {
    this.props.dispatch(Actions.requestSavePost(this.state));
  };
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
