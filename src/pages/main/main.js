import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../main/main.css';
import { Button } from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <div className="main_demo">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Main Page</title>
        </Helmet>
        Main Page <br />
        go to <a href="http://localhost:3000/auth">http://localhost:3000/auth</a>  to see another page <br />
        <Button bsStyle="success">Primary</Button>
      </div>
    );
  }
}

export default Main;
