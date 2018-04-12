import * as React from 'react';
import Post from './Post';
import PostGrid from '../Grids/PostGrid';
import PostForm from './PostForm';
import * as Actions from '../../common/actions';
import { connect } from 'react-redux';

class PostList extends React.Component {
  componentWillMount() {
    this.props.dispatch(Actions.setActivePage('Blog'));
  }

  render() {
    const posts = this.props.posts.map((p) => (
      <Post
        dispatch={this.props.dispatch}
        isAuthenticated={this.props.isAuthenticated}
        key={`post-${p.id}`}
        post={p}
      />
    ));

    return (
      <PostGrid>
        {this.props.isAuthenticated ? <PostForm /> : null}
        {posts}
      </PostGrid>
    );
  }
}

export default connect((state) => state)(PostList);
