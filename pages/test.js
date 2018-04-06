import * as React from 'react';
import Document from '../Components/Document';
import withData from '../higher-order/withData';
import TestGrid from '../Components/Test/TestGrid';
import AnimationGrid from '../Components/Grids/AnimationGrid';
import TestHeading from '../Components/Test/TestHeading';
import AnimationContainer from '../Components/Animation/AnimationContainer';
import TestArrow from '../Components/Test/TestArrow';
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
          <AnimationGrid>
            <AnimationContainer />
          </AnimationGrid>
          <TestArrow />
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
