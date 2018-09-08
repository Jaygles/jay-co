import styled, { css } from 'react-emotion';
import Link from './Link';

export const PortfolioBody = styled('div')`
  margin: 20px 20px 20px 0;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgb(220, 220, 220);
  @media (max-width: 650px) {
    margin: 0;
    padding: 20px;
  }
`;

export const PostBody = styled('div')`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgb(220, 220, 220);
`;

export const Heading1 = styled('h1')`
  margin-top: 20px;
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
  color: rgb(220, 220, 220);
  @media (max-width: 650px) {
    margin: 0;
    padding: 20px;
  }
  @media (min-width: 3839px) {
    font-size: 96px;
    line-height: 104px;
  }
  @media (min-width: 4559px) {
    font-size: 128px;
    line-height: 140px;
  }
`;

export const Heading2 = styled('h1')`
  font-weight: 400;
  color: rgb(220, 220, 220);
  line-height: 20px;
  font-size: 12px;
`;

export const Heading3 = styled('h1')`
  font-weight: 400;
  color: rgb(220, 220, 220);
  line-height: 20px;
  font-size: 12px;
`;

export const Heading4 = styled('h1')`
  font-weight: 400;
  color: rgb(220, 220, 220);
  line-height: 20px;
  font-size: 12px;
`;

export const Paragraph = styled('p')`
  font-weight: 400;
  color: rgb(220, 220, 220);
  line-height: 20px;
  font-size: 12px;
`;

export const PageTitle = styled('h1')`
  color: rgb(220, 220, 220);
  font-weight: 600;
  line-height: 20px;
  font-size: 12px;
`;

export const MainDescription = styled('p')`
  color: rgb(220, 220, 220);
  font-weight: 600;
  line-height: 28px;
  font-size: 24px;
  @media (max-width: 650px) {
    font-size: 16px;
  }
  @media (min-width: 2559px) {
    font-size: 32px;
  }
  @media (min-width: 4559px) {
    font-size: 96px;
    line-height: 96px;
  }
`;

export const Anchor = (props) => {
  const basicStyles = css`
    text-decoration: none;
    font-size: 24px;
    font-weight: 400;
    color: #72b597;
    &:visited {
      color: #72b597;
    }
    &:hover {
      color: #377c79;
      cursor: pointer;
    }
    @media (min-width: 2559px) {
      font-size: 32px;
    }
    @media (min-width: 4559px) {
      font-size: 96px;
    }
  `;

  return <Link {...props} prefetch className={basicStyles} />;
};
