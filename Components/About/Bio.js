import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import AboutGrid from '../Grids/AboutGrid';
import Resume from './Resume';
import * as Text from '../Bits/Text';
import * as Actions from '../../common/actions';
import * as gtag from '../../utils/gtag';

const BioImg = styled('img')`
  width: 100%;
  border-radius: 25%;
`;

const BioText = styled('p')`
  width: 80%;
  margin-bottom: 20px;
  grid-area: text;
  justify-self: center;
  align-self: stretch;
  font-size: 20px;
`;

const ResumeLink = styled('a')`
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
  color: #72b597;
  &:hover {
    color: #377c79;
    cursor: pointer;
  }
`;

class Bio extends React.Component {
  componentWillMount() {
    this.props.dispatch(Actions.setActivePage('Resume'));
  }

  _handleOutlink = () => {
    if (typeof window !== 'undefined') {
      gtag.event({
        action: 'download_resume',
        category: 'Resume',
        label: 'resume-dl',
      });
    }
  };

  render() {
    return (
      <AboutGrid>
        <BioText>
          See my resume below. I am currently looking for new opportunities in
          the Kansas City metro area and in Boulder, Colorado.
          <br />
          <br />
          References available upon request.
          <br />
          <br />
          <ResumeLink
            onClick={() => this._handleOutlink()}
            href="./static/pdf/Resume.pdf"
            target="_blank"
          >
            Download Resume (PDF)
          </ResumeLink>
        </BioText>
        <Resume />
      </AboutGrid>
    );
  }
}

export default connect((state) => state)(Bio);
