import * as React from 'react';
import Textarea from '../Components/Textarea';
import Button from '../Components/Button';
import { connect } from 'react-redux';

class PostForm extends React.Component {
  render() {
    return (
      <div style={this.props.style}>
        <Textarea
          onChange={this.props.onTitleChange}
          value={this.props.title}
          placeholder="Optional title"
          fontWeight={600}
          lineHeight="40px"
          fontSize="48px"
        />
        <Textarea
          onChange={this.props.onContentChange}
          placeholder="Start writing..."
          fontSize="16px"
          lineHeight="24px"
          value={this.props.value}
        />
      </div>
    );
  }
}

export default connect((state) => state)(PostForm);