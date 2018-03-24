import * as React from 'react';
import Portfolio from './Portfolio';
import * as PortfolioGrid from '../Grids/PortfolioGrid';
import { connect } from 'react-redux';

class PortfolioList extends React.Component {
  render() {
    const portfolios = this.props.portfolios.map((p) => (
      <Portfolio
        dispatch={this.props.dispatch}
        isAuthenticated={this.props.isAuthenticated}
        key={`portfolio-${p.id}`}
        portfolio={p}
      />
    ));

    return <PortfolioGrid.main>{portfolios}</PortfolioGrid.main>;
  }
}

export default connect((state) => state)(PortfolioList);
