import * as React from 'react';
import Textarea from '../Bits/Textarea';
import Button from '../Bits/Button';
import Input from '../Bits/Input';
import * as Actions from '../../common/actions';
import { connect } from 'react-redux';

class PortfolioForm extends React.Component {
  state = {
    description: '',
    title: '',
    img: '',
  };

  _handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  _handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  _handleImgChange = (e) => {
    this.setState({ img: e.target.value });
  };

  _handleSave = () => {
    console.log(this.state);
    this.props.dispatch(
      Actions.requestSavePortfolio({
        img: this.state.img,
        description: this.state.description,
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
          onChange={this._handleDescriptionChange}
          placeholder="Description"
          fontSize="16px"
          lineHeight="24px"
          value={this.state.description}
        />
        <Input
          onChange={this._handleImgChange}
          value={this.state.img}
          placeholder="image src"
        />
        <Button onClick={this._handleSave}>Save</Button>
      </div>
    );
  }
}

export default connect((state) => state)(PortfolioForm);
