import * as React from 'react';
import Document from '../Components/Document';
import AdminGrid from '../Components/Grids/AdminGrid';
import LoginForm from '../Components/Auth/LoginForm';
import SignupForm from '../Components/Auth/SignupForm';
import withData from '../higher-order/withData';

class Admin extends React.Component {
  render() {
    return (
      <Document>
        <AdminGrid>
          <LoginForm />
          <SignupForm />
        </AdminGrid>
      </Document>
    );
  }
}

export default withData({}, (state) => state)(Admin);
