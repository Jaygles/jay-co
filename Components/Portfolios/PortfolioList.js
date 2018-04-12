import * as React from 'react';
import Portfolio from './Portfolio';
import PortfolioForm from './PortfolioForm';
import * as PortfolioGrid from '../Grids/PortfolioGrid';
import * as Actions from '../../common/actions';
import { connect } from 'react-redux';

class PortfolioList extends React.Component {
  componentWillMount() {
    this.props.dispatch(Actions.setActivePage('Portfolio'));
  }
  render() {
    const portfolios = this.props.portfolios.map((p) => (
      <Portfolio
        dispatch={this.props.dispatch}
        isAuthenticated={this.props.isAuthenticated}
        key={`portfolio-${p.id}`}
        portfolio={p}
      />
    ));

    return (
      <PortfolioGrid.main>
        {portfolios}
        {this.props.isAuthenticated ? (
          <PortfolioForm style={{ 'margin-top': '37px' }} />
        ) : null}
      </PortfolioGrid.main>
    );
  }
}

export default connect((state) => state)(PortfolioList);
