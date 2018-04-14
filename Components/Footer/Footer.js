import * as React from 'react';
import styled from 'react-emotion';
import FooterIcon from './FooterIcon';

const FooterWrapper = styled('footer')`
  width: 100vw;
  font-size: 16px;
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
        <FooterIcon
          img="./static/linkedin-icon.png"
          href="https://www.linkedin.com/in/the-jay-sullivan/"
        />
        <FooterIcon
          img="./static/github-icon.png"
          href="https://www.github.com/Jaygles"
        />
      </FooterWrapper>
    );
  }
}

export default Footer;
