import styled, { css } from 'react-emotion';
import Link from './Link';

export const PortfolioBody = styled('div')`
  margin: 20px 20px 20px 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgb(56, 56, 60);
`;

export const PostBody = styled('div')`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgb(56, 56, 60);
`;

export const Heading1 = styled('h1')`
  margin-top: 20px;
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
  color: rgb(56, 56, 60);
`;

export const Heading2 = styled('h1')`
  font-weight: 400;
  color: rgb(56, 56, 60);
  line-height: 20px;
  font-size: 12px;
`;

export const Heading3 = styled('h1')`
  font-weight: 400;
  color: rgb(56, 56, 60);
  line-height: 20px;
  font-size: 12px;
`;

export const Heading4 = styled('h1')`
  font-weight: 400;
  color: rgb(56, 56, 60);
  line-height: 20px;
  font-size: 12px;
`;

export const Paragraph = styled('p')`
  font-weight: 400;
  color: rgb(56, 56, 60);
  line-height: 20px;
  font-size: 12px;
`;

export const PageTitle = styled('h1')`
  color: rgb(56, 56, 60);
  font-weight: 600;
  line-height: 20px;
  font-size: 12px;
`;

export const Anchor = (props) => {
  const basicStyles = css`
    text-decoration: none;
    font-size: 24px;
    font-weight: 400;
    color: #0d0d0d;
    &:visited {
      color: #000000;
    }
    &:hover {
      color: #0000ff;
      cursor: pointer;
    }
  `;

  return <Link {...props} className={basicStyles} />;
};
