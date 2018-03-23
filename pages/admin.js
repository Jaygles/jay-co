import * as React from 'react';
import Document from '../Components/Document';
import LoginForm from '../Components/LoginForm';
import LogoutButton from '../Components/LogoutButton';
import PostForm from '../Components/PostForm';
import Button from '../Components/Button';
import PostList from '../Components/PostList';
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
        <p>logged in</p>
        <LogoutButton />
        <PostForm
          title={this.state.title}
          content={this.state.content}
          onTitleChange={this._handleChangeTitle}
          onContentChange={this._handleChangeContent}
        />
        <Button onClick={this._handleSave}>Publish</Button>
        <PostList />
      </div>
    );
  };

  renderLoggedOut = () => {
    return [<LoginForm />];
  };

  render() {
    let subview = !this.props.isAuthenticated
      ? this.renderLoggedOut()
      : this.renderLoggedIn();

    return <Document>{subview}</Document>;
  }
}

export default withData({}, (state) => state)(Index);
