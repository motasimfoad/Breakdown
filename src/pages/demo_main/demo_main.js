import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../demo_main/demo_main.css';
import { Button } from 'react-mdl';

class demo_main extends Component {
  render() {
    return (
      <div className="dm_demo">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Dashboard Page</title>
        </Helmet>
        dm Page <br />
        <Button raised colored>MDL</Button>
      </div>
    );
  }
}

export default demo_main;
