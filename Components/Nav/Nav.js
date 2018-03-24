import * as React from 'react';
import SideNav from './SideNav';
import * as Text from '../Bits/Text';
import LogoutButton from '../Auth/LogoutButton';

export default class PostPreview extends React.Component {
  render() {
    const { post, isAuthenticated } = this.props;
    return (
      <SideNav>
        <Text.Anchor href="/">Home</Text.Anchor>
        <Text.Anchor href="/about">About</Text.Anchor>
        <Text.Anchor href="/portfolio">Portfolio</Text.Anchor>
        {isAuthenticated ? <LogoutButton /> : null}
      </SideNav>
    );
  }
}
