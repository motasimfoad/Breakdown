import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import '../main/main.css';
import {Row,Col} from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import pic from './logo.png';
import img from './flogo.png';


library.add(faAngleDown,fab );

class Main extends Component {
  render() {
    return (
      <div>
           <Helmet>
            <meta charSet="utf-8" />
            <title>Main</title>
        </Helmet>

          <div className="big">
          
          <img src={pic} className="pic " alt="" /> 

          <Row className="show-grid">
            <Col md={6} mdPush={6} className="ls">
              <h2><b>GET PRODUCTIVE</b></h2><br />
              <p><a href="http://localhost:3000/auth">LOGIN</a> OR <a href="http://localhost:3000/auth">SIGN UP</a></p><br />
            </Col>
            <Col md={6} mdPull={6}>
            </Col>
          </Row>

            <div className="icon">
              <FontAwesomeIcon icon={faAngleDown}/>
              {/* <a href="#about"><FontAwesomeIcon icon={faAngleDown}/></a> */}
            </div>

          </div>

{/* about section */} 
          <Row className="abt show-grid">
              <Col xsHidden md={3}>
              </Col>
              <Col xs={12} md={6} className="about">
              <h2>About us</h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, 
              et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit
              </Col>
              <Col xsHidden md={3}>
              </Col>
            </Row>
{/* footer */}
<Row className="footer show-grid">
    
    <Col xs={6} sm={4} md={4} className="f1">
     <img src={img} className="img" alt="" />             
    </Col>
    <div className="socialI">
      <Col xs={6} sm={4} md={4} className="f2">
        <ul>
          <li>
            <a href="https://www.instagram.com/motasimfoad/" className="insta">
            <FontAwesomeIcon icon={faTwitter} />
            </a>      
          </li>

          <li>
            <a href="https://www.instagram.com/motasimfoad/" className="insta">
            <FontAwesomeIcon icon={faInstagram} />
            </a>      
          </li>

          <li>
            <a href="https://www.instagram.com/motasimfoad/" className="fb">
            <FontAwesomeIcon icon={faFacebookF} />
            </a>      
            </li>    
        </ul>
      </Col>
    </div>
    <Col xs={12} sm={4} md={4} className="f3">
      &copy; 2019 All rights reserved
    </Col>
 
  </Row>
   
      </div>
    );
  }
}

export default Main;
