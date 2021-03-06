import * as React from 'react';
import Textarea from '../Bits/Textarea';
import Button from '../Bits/Button';
import Input from '../Bits/Input';
import * as Actions from '../../common/actions';
import { connect } from 'react-redux';
import styled from 'react-emotion';

const PortfolioFormWrapper = styled('div')`
  width: 90%;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media (max-width: 650px) {
    padding: 30px;
  }
`;

class PortfolioForm extends React.Component {
  state = {
    description: '',
    title: '',
    link: '',
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

  _handleLinkChange = (e) => {
    this.setState({ link: e.target.value });
  };

  _handleSave = () => {
    console.log(this.state);
    this.props.dispatch(
      Actions.requestSavePortfolio({
        img: this.state.img,
        description: this.state.description,
        link: this.state.link,
        title: this.state.title,
      }),
    );
  };

  render() {
    return (
      <PortfolioFormWrapper style={this.props.style}>
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
        <Input
          onChange={this._handleLinkChange}
          value={this.state.link}
          placeholder="link"
        />
        <Button onClick={this._handleSave}>Save</Button>
      </PortfolioFormWrapper>
    );
  }
}

export default connect((state) => state)(PortfolioForm);
