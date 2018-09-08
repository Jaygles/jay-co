import * as React from 'react';
import PostLockup from './PostLockup';
import * as Text from '../Bits/Text';
import * as Strings from '../../common/strings';
import * as Actions from '../../common/actions';
import Button from '../Bits/Button';
import Textarea from '../Bits/Textarea';
import SinglePostWrap from './SinglePostWrap';
import sanitizeHtml from 'sanitize-html';
import styled from 'react-emotion';

const EditOptionsWrapper = styled('div')`
  height: 40px;
  width: 223px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export default class Post extends React.Component {
  state = {
    isEditing: false,
    content: this.props.post ? this.props.post.content : undefined,
    title: this.props.post ? this.props.post.title : undefined,
  };

  _handleEdit = () => {
    this.setState({ isEditing: true });
  };

  _handleCancel = () => {
    this.setState({
      isEditing: false,
      content: this.props.post.content,
      title: this.props.post.title,
    });
  };

  _handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  _handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  _handleSave = () => {
    this.props.dispatch(
      Actions.requestUpdatePost({
        postId: this.props.post.id,
        content: this.state.content,
        title: this.state.title,
      }),
    );
  };

  _handleDelete = () => {
    this.props.dispatch(Actions.requestDeletePost(this.props.post.id));
  };

  renderLoggedOut = () => {
    const { post } = this.props;
    const sanitizedPost = sanitizeHtml(post.content, {
      allowedTags: [
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'p',
        'a',
        'ul',
        'ol',
        'nl',
        'li',
        'b',
        'i',
        'strong',
        'em',
        'strike',
        's',
        'code',
        'hr',
        'br',
        'div',
        'table',
        'thead',
        'caption',
        'tbody',
        'tr',
        'th',
        'td',
        'pre',
        'img',
        'figure',
        'figcaption',
      ],
      allowedAttributes: {
        a: ['href', 'name', 'target'],
        img: ['src', 'alt', 'width', 'height'],
        div: ['class'],
      },
      selfClosing: [
        'img',
        'br',
        'hr',
        'area',
        'base',
        'basefont',
        'input',
        'link',
        'meta',
      ],
      allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
      allowedSchemesByTag: {},
    });
    return (
      <SinglePostWrap>
        <Text.Heading1>{post.title ? post.title : 'untitled'}</Text.Heading1>
        <PostLockup
          commentLength={post.comments.length}
          createdAt={post.createdAt}
          username={post.user.username}
        />
        <Text.PostBody style={{ marginTop: 24 }}>
          <div dangerouslySetInnerHTML={{ __html: sanitizedPost }} />
          <br />
          <br />
        </Text.PostBody>
      </SinglePostWrap>
    );
  };

  renderLoggedIn = () => {
    const { post } = this.props;
    const { isEditing } = this.state;
    const sanitizedPost = sanitizeHtml(post.content, {
      allowedTags: [
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'blockquote',
        'p',
        'a',
        'ul',
        'ol',
        'nl',
        'li',
        'b',
        'i',
        'strong',
        'em',
        'strike',
        's',
        'code',
        'hr',
        'br',
        'div',
        'table',
        'thead',
        'caption',
        'tbody',
        'tr',
        'th',
        'td',
        'pre',
        'img',
        'figure',
        'figcaption',
      ],
      allowedAttributes: {
        a: ['href', 'name', 'target'],
        img: ['src', 'alt', 'width', 'height'],
        div: ['class'],
      },
      selfClosing: [
        'img',
        'br',
        'hr',
        'area',
        'base',
        'basefont',
        'input',
        'link',
        'meta',
      ],
      allowedSchemes: ['http', 'https', 'ftp', 'mailto'],
      allowedSchemesByTag: {},
    });
    return (
      <SinglePostWrap>
        <div />
        {isEditing ? (
          <Textarea
            value={this.state.title}
            placeholder="Optional title"
            fontWeight={600}
            lineHeight="3rem"
            fontSize="40px"
            onChange={this._handleTitleChange}
          />
        ) : (
          <Text.Heading1>{this.state.title}</Text.Heading1>
        )}
        <PostLockup
          commentLength={post.comments.length}
          createdAt={post.createdAt}
          username={post.user.username}
        />
        {isEditing ? (
          <Textarea
            value={this.state.content}
            placeholder="Start writing..."
            onChange={this._handleContentChange}
          />
        ) : (
          undefined
        )}
        {!isEditing ? (
          <Text.PostBody style={{ margin: '16px 0 20px 0' }}>
            <div dangerouslySetInnerHTML={{ __html: sanitizedPost }} />
          </Text.PostBody>
        ) : (
          undefined
        )}
        <EditOptionsWrapper>
          {!isEditing ? (
            <Button onClick={this._handleEdit}>Edit Post</Button>
          ) : (
            undefined
          )}
          {isEditing ? (
            <Button onClick={this._handleCancel}>Cancel</Button>
          ) : (
            undefined
          )}
          {isEditing ? (
            <Button onClick={this._handleSave}>Save</Button>
          ) : (
            undefined
          )}
          <Button onClick={this._handleDelete}>Delete</Button>
        </EditOptionsWrapper>
      </SinglePostWrap>
    );
  };

  render() {
    let subview = !this.props.isAuthenticated
      ? this.renderLoggedOut()
      : this.renderLoggedIn();

    return subview;
  }
}
