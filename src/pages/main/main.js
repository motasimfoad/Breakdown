import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../main/main.css';
// import {Grid,Row,Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowDown);

class Main extends Component {
  render() {
    return (
      <div>
           <Helmet>
            <meta charSet="utf-8" />
            <title>Main</title>
        </Helmet>
        <div className="big p">
          brac
        </div>
        <div className="box">
          .jbsjbzlbvlzszl/xnkgbnlxjblb
        </div>
        <div className="small parallax">
          brac
        </div>
      </div>
     

       
      
    );
  }
}

export default Main;
