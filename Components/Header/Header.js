import * as React from 'react';
import HeaderGrid from '../Grids/HeaderGrid';
import HeaderHeading from './HeaderHeading';
import AnimationBackdrop from '../Animation/AnimationBackdrop';
import Animation from '../Animation/Animation';
import HeaderDescription from './HeaderDescription';
import HeaderArrow from './HeaderArrow';

class Header extends React.Component {
  render() {
    return (
      <HeaderGrid>
        <HeaderHeading />
        <AnimationBackdrop />
        <Animation />
        <HeaderDescription />
        <HeaderArrow />
      </HeaderGrid>
    );
  }
}

export default Header;
