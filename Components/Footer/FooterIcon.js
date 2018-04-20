import styled, { css } from 'react-emotion';

const FooterIcon = (props) => {
  const { img, href } = props;
  const aStyle = css`
    display: block;
    width: 32px;
    height: 32px;
  `;
  const Icon = styled('span')`
    width: 32px;
    height: 32px;
    margin-left: 10px;
    background-image: url(${img});
    background-size: 32px;
    @media (min-width: 4559px) {
      width: 64px;
      height: 64px;
      margin-left: 20px;
      background-size: 64px;
    }
  `;
  return (
    <Icon>
      <a className={aStyle} href={href} target="_blank" />
    </Icon>
  );
};

export default FooterIcon;
