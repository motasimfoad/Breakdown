import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../dashboard/dashboard.css';
import { Button } from 'react-mdl';

class Dashboard extends Component {
  render() {
    return (
      <div className="dash_demo">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Dashboard Page</title>
        </Helmet>
        Dash Page <br />
        <Button raised colored>MDL</Button>
      </div>
    );
  }
}

export default Dashboard;
