import * as React from 'react';
import NavGrid from '../Grids/NavGrid';
import * as Text from '../Bits/Text';
import LogoutButton from '../Auth/LogoutButton';

export default class PostPreview extends React.Component {
  render() {
    const { post, isAuthenticated } = this.props;
    return (
      <NavGrid>
        <Text.Anchor href="/">Home</Text.Anchor>
        <Text.Anchor href="/about">About</Text.Anchor>
        <Text.Anchor href="/portfolio">Portfolio</Text.Anchor>
        {isAuthenticated ? <LogoutButton /> : null}
      </NavGrid>
    );
  }
}
