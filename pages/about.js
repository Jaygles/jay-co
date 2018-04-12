import * as React from 'react';
import Document from '../Components/Document';
import Header from '../Components/Header/Header';
import SubHeader from '../Components/SubHeader/SubHeader';
import Nav from '../Components/Nav/Nav';
import MainGrid from '../Components/Grids/MainGrid';
import Bio from '../Components/About/Bio';
import withData from '../higher-order/withData';

class About extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Document>
        <Header />
        <SubHeader />
        <MainGrid>
          <Nav isAuthenticated={isAuthenticated} />
          <Bio />
        </MainGrid>
      </Document>
    );
  }
}

export default withData({}, (state) => state)(About);
