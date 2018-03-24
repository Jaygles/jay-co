import * as React from 'react';
import Document from '../Components/Document';
import AdminGrid from '../Components/Grids/AdminGrid';
import LoginForm from '../Components/Auth/LoginForm';
import withData from '../higher-order/withData';

class Index extends React.Component {
  render() {
    return (
      <Document>
        <AdminGrid>
          <LoginForm />
        </AdminGrid>
      </Document>
    );
  }
}

export default withData({}, (state) => state)(Index);
