import * as React from 'react';
import Document from '../Components/Document';
import withData from '../higher-order/withData';
import TestGrid from '../Components/Test/TestGrid';
import TestHeading from '../Components/Test/TestHeading';
import Header from '../Components/Header/Header';
import Nav from '../Components/Nav/Nav';
import MainGrid from '../Components/Grids/MainGrid';
import PostList from '../Components/Posts/PostList';

class Test extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Document>
        <TestGrid>
          <TestHeading />
        </TestGrid>
        <Header />
        <MainGrid key="layout">
          <Nav isAuthenticated={this.props.isAuthenticated} />
          <PostList />
        </MainGrid>
      </Document>
    );
  }
}

export default withData({}, (state) => state)(Test);
