import * as React from 'react';
import NavGrid from '../Grids/NavGrid';
import NavItem from './NavItem';
import LogoutButton from '../Auth/LogoutButton';

export default class PostPreview extends React.Component {
  render() {
    const { post, isAuthenticated } = this.props;
    return (
      <NavGrid>
        <NavItem target="/" label="Portfolio" />
        <NavItem target="/about" label="Resume" />
        <NavItem target="/blog" label="Blog" />
        {isAuthenticated ? <LogoutButton /> : null}
      </NavGrid>
    );
  }
}
