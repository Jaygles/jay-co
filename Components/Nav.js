import * as React from 'react';
import SideNav from './SideNav';
import * as Text from './Text';

export default class PostPreview extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <SideNav>
        <Text.Anchor href="about">About</Text.Anchor>
      </SideNav>
    );
  }
}
