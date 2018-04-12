import * as React from 'react';
import Document from '../Components/Document';
import Header from '../Components/Header/Header';
import SubHeader from '../Components/SubHeader/SubHeader';
import Nav from '../Components/Nav/Nav';
import PostList from '../Components/Posts/PostList';
import MainGrid from '../Components/Grids/MainGrid';
import Footer from '../Components/Footer/Footer';
import withData from '../higher-order/withData';

class Blog extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Document>
        <Header />
        <SubHeader />
        <MainGrid>
          <Nav isAuthenticated={isAuthenticated} />
          <PostList />
          <Footer />
        </MainGrid>
      </Document>
    );
  }
}

export default withData({}, (state) => state)(Blog);
