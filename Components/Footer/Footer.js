import * as React from 'react';
import styled from 'react-emotion';
import FooterIcon from './FooterIcon';

const FooterWrapper = styled('footer')`
  padding-bottom: 5px;
  width: 100%;
  font-size: 16px;
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Footer extends React.Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <FooterWrapper>
        <span>&copy;{year} Jacob Sullivan</span>
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
