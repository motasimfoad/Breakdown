import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../auth/auth.css';

class Auth extends Component {
  render() {
    return (
      <div className="auth_demo">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Auth Page</title>
        </Helmet>
        Auth Page
      </div>
    );
  }
}

export default Auth;
