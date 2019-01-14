import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../main/main.css';
import {Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import pic from './logo.png';

library.add(faAngleDown);

class Main extends Component {
  render() {
    return (
      <div>
           <Helmet>
            <meta charSet="utf-8" />
            <title>Main</title>
        </Helmet>
        <div className="big">
         <img src={pic} className="pic" alt="" /> 
          <div className="text">
            <h2><b>GET PRODUCTIVE</b></h2><br />
            <a href="http://localhost:3000/auth">LOGIN</a> OR <a href="http://localhost:3000/auth">SIGN UP</a> <br />
          </div>

          <div className="icon">
            <a href="#about"><FontAwesomeIcon icon={faAngleDown}/></a>
          </div>

        </div>
        <div className="small fadeIn">
          <a name="about"> 
          <Col xs={2} md={3}></Col>
          <div className="col-xs-8 col-md-6">
          <h2>About us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit</p>
          </div>
          <Col xs={2} md={3}></Col>
          </a>
        </div>
      </div>
     
<footer>
  mbfkbxkjbfl
</footer>
       
      
    );
  }
}

export default Main;
