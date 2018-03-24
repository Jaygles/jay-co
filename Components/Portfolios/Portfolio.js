import * as React from 'react';
import * as Text from '../Bits/Text';
import * as Strings from '../../common/strings';
import * as Actions from '../../common/actions';
import Button from '../Bits/Button';
import Textarea from '../Bits/Textarea';
import Link from '../Bits/Link';
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

  _handleContentChange = (e) => {
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
        <Text.Heading2>
          {portfolio.title ? portfolio.title : null}
        </Text.Heading2>
        <Link href="https://www.google.com">
          <img src="via.placeholder.com/250x150" />
        </Link>
      </PortfolioGrid.single>
    );
  };

  renderLoggedIn = () => {
    const { portfolio } = this.props;
    const { isEditing } = this.state;
    return (
      <PortfolioGrid.single>
        <Text.Heading2>
          {portfolio.title ? portfolio.title : null}
        </Text.Heading2>
        <Link href="https://www.google.com">
          <img src="http://via.placeholder.com/250x150" />
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
