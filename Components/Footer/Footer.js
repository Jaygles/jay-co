import * as React from 'react';
import styled from 'react-emotion';

const FooterWrapper = styled('footer')`
  width: 100vw;
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <span>&copy; Jacob Sullivan</span>
      </FooterWrapper>
    );
  }
}

export default Footer;
