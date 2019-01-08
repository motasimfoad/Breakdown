import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../auth/auth.css';
import { Button } from 'reactstrap';

class Auth extends Component {
  render() {
    return (
      <div className="auth_demo">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Auth Page</title>
        </Helmet>
        Auth Page <br />
        <Button color="success">Danger!</Button>
      </div>
    );
  }
}

export default Auth;
