import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../main/main.css';

class Main extends Component {
  render() {
    return (
      <div className="main_demo">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Main Page</title>
        </Helmet>
        Main Page
      </div>
    );
  }
}

export default Main;
