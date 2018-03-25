import * as React from 'react';
import * as Text from '../Bits/Text';
import * as Strings from '../../common/strings';
import * as Actions from '../../common/actions';
import Button from '../Bits/Button';
import Textarea from '../Bits/Textarea';
import Link from '../Bits/Link';
import Img from '../Bits/Img';
import * as PortfolioGrid from '../Grids/PortfolioGrid';

export default class Portfolio extends React.Component {
  state = {
    isEditing: false,
    description: this.props.portfolio
      ? this.props.portfolio.description
      : undefined,
    title: this.props.portfolio ? this.props.portfolio.title : undefined,
  };

  _handleEdit = () => {
    this.setState({ isEditing: true });
  };

  _handleCancel = () => {
    this.setState({
      isEditing: false,
      description: this.props.portfolio.description,
      title: this.props.portfolio.title,
    });
  };

  _handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  _handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  _handleSave = () => {
    this.props.dispatch(
      Actions.requestUpdatePortfolio({
        portfolioId: this.props.portfolio.id,
        description: this.state.description,
        title: this.state.title,
      }),
    );
  };

  _handleDelete = () => {
    this.props.dispatch(
      Actions.requestDeletePortfolio(this.props.portfolio.id),
    );
  };

  renderLoggedOut = () => {
    const { portfolio } = this.props;
    return (
      <PortfolioGrid.single>
        <Text.Heading1>
          {portfolio.title ? portfolio.title : null}
        </Text.Heading1>
        <Text.PortfolioBody>{portfolio.description}</Text.PortfolioBody>
        <Link
          target="_blank"
          style={{ 'align-self': 'end' }}
          href={portfolio.link}
        >
          <Img src={portfolio.img} />
        </Link>
      </PortfolioGrid.single>
    );
  };

  renderLoggedIn = () => {
    const { portfolio } = this.props;
    const { isEditing } = this.state;
    return (
      <PortfolioGrid.single>
        <div>
          {!isEditing ? (
            <Button onClick={this._handleEdit}>Edit Portfolio Item</Button>
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
        </div>
        {isEditing ? (
          <Textarea
            value={this.state.title}
            placeholder="Optional title"
            fontWeight={600}
            lineHeight="2.8rem"
            fontSize="2.618rem"
            onChange={this._handleTitleChange}
          />
        ) : (
          <Text.Heading1>
            {portfolio.title ? portfolio.title : null}
          </Text.Heading1>
        )}
        {isEditing ? (
          <Textarea
            value={this.state.description}
            placeholder="Optional title"
            fontWeight={600}
            lineHeight="2.8rem"
            fontSize="2.618rem"
            onChange={this._handleDescriptionChange}
          />
        ) : (
          <Text.PortfolioBody>
            {portfolio.description ? portfolio.description : null}
          </Text.PortfolioBody>
        )}
        <Link
          target="_blank"
          style={{ 'align-self': 'end' }}
          href={portfolio.link}
        >
          <Img src={portfolio.img} />
        </Link>
      </PortfolioGrid.single>
    );
  };

  render() {
    let subview = !this.props.isAuthenticated
      ? this.renderLoggedOut()
      : this.renderLoggedIn();

    return subview;
  }
}
