import * as React from 'react';
import Document from '../Components/Document';
import Header from '../Components/Header/Header';
import SubHeader from '../Components/SubHeader/SubHeader';
import Nav from '../Components/Nav/Nav';
import PortfolioList from '../Components/Portfolios/PortfolioList';
import MainGrid from '../Components/Grids/MainGrid';
import withData from '../higher-order/withData';

class Index extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Document>
        <Header />
        <SubHeader />
        <MainGrid>
          <Nav isAuthenticated={isAuthenticated} />
          <PortfolioList isAuthenticated={isAuthenticated} />
        </MainGrid>
      </Document>
    );
  }
}

export default withData({}, (state) => state)(Index);
