import * as React from 'react';
import Document from '../Components/Document';
import withData from '../higher-order/withData';
import TestGrid from '../Components/Test/TestGrid';
import TestHeading from '../Components/Test/TestHeading';
import AnimationBackdrop from '../Components/Animation/AnimationBackdrop';
import AnimationContainer from '../Components/Animation/AnimationContainer';
import TestDescription from '../Components/Test/TestDescription';
import TestArrow from '../Components/Test/TestArrow';
import Header from '../Components/Header/Header';
import MainGrid from '../Components/Grids/MainGrid';
import Nav from '../Components/Nav/Nav';
import PortfolioList from '../Components/Portfolios/PortfolioList';

class Test extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Document>
        <TestGrid>
          <TestHeading />
          <AnimationBackdrop />
          <AnimationContainer />
          <TestDescription />
          <TestArrow />
        </TestGrid>
        <Header />
        <MainGrid key="layout">
          <Nav isAuthenticated={this.props.isAuthenticated} />
          <PortfolioList />
        </MainGrid>
      </Document>
    );
  }
}

export default withData({}, (state) => state)(Test);
