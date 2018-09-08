import * as React from 'react';
import Textarea from '../Bits/Textarea';
import Button from '../Bits/Button';
import * as Actions from '../../common/actions';
import { connect } from 'react-redux';
import styled from 'react-emotion';

const PostFormWrapper = styled('div')`
  width: 90%;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

class PostForm extends React.Component {
  state = {
    content: '',
    title: '',
  };

  _handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  _handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  _handleSave = () => {
    console.log(this.state);
    this.props.dispatch(
      Actions.requestSavePost({
        content: this.state.content,
        title: this.state.title,
      }),
    );
  };

  render() {
    return (
      <PostFormWrapper style={this.props.style}>
        <Textarea
          onChange={this._handleTitleChange}
          value={this.state.title}
          placeholder="Title"
          fontWeight={600}
          lineHeight="40px"
          fontSize="48px"
        />
        <Textarea
          onChange={this._handleContentChange}
          placeholder="Content"
          fontSize="16px"
          lineHeight="24px"
          value={this.state.content}
        />
        <Button onClick={this._handleSave}>Save</Button>
      </PostFormWrapper>
    );
  }
}

export default connect((state) => state)(PostForm);
