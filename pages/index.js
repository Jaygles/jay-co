import * as React from 'react';
import Document from '../Components/Document';
import Header from '../Components/Header/Header';
import SubHeader from '../Components/SubHeader/SubHeader';
import Nav from '../Components/Nav/Nav';
import MainGrid from '../Components/Grids/MainGrid';
import PortfolioList from '../Components/Portfolios/PortfolioList';
import Footer from '../Components/Footer/Footer';
import * as Actions from '../common/actions';
import withData from '../higher-order/withData';

class Index extends React.Component {
  renderLoggedIn = () => {
    return (
      <div>
        <Header />
        <SubHeader />
        <MainGrid key="layout">
          <Nav isAuthenticated={this.props.isAuthenticated} />
          <PortfolioList isAuthenticated={this.props.isAuthenticated} />
          <Footer />
        </MainGrid>
      </div>
    );
  };

  renderLoggedOut = () => {
    return (
      <div>
        <Header />
        <SubHeader />
        <MainGrid key="layout">
          <Nav />
          <PortfolioList isAuthenticated={false} />
        </MainGrid>
        <Footer />
      </div>
    );
  };

  render() {
    let subview = !this.props.isAuthenticated
      ? this.renderLoggedOut()
      : this.renderLoggedIn();

    return <Document>{subview}</Document>;
  }
}

export default withData({}, (state) => state)(Index);
