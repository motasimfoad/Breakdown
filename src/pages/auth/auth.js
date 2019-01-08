import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../auth/auth.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Auth extends Component {
  render() {
    return (
      <div className="auth_demo">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Auth Page</title>
        </Helmet>
        Auth Page <br />
        <Link to="/dashboard">Dashboard to see mdl</Link> <br />
        <Button color="success">React Strap</Button>
      </div>
    );
  }
}

export default Auth;
