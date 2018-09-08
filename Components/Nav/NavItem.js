import * as React from 'react';
import Router from 'next/router';
import styled from 'react-emotion';
import * as Text from '../Bits/Text';

const NavItemWrap = styled('div')``;
const SmallArrow = styled('span')`
  font-size: 50%;
  position: relative;
  top: -5px;
`;

class NavItem extends React.Component {
  render() {
    const { target, label } = this.props;
    return (
      <NavItemWrap>
        <Text.Anchor onClick={() => Router.push(target)}>
          <SmallArrow>»</SmallArrow>
          {label}
        </Text.Anchor>
      </NavItemWrap>
    );
  }
}

export default NavItem;
