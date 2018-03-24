import * as React from 'react';
import Textarea from '../Bits/Textarea';
import Button from '../Bits/Button';
import * as Actions from '../../common/actions';
import { connect } from 'react-redux';

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
      <div style={this.props.style}>
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
      </div>
    );
  }
}

export default connect((state) => state)(PostForm);
