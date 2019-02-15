import React, { Component } from 'react';
import { BrowserRouter as Router, Route,NavLink} from "react-router-dom";
import signupform from './signupform.js';
import login from './login.js';
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
      <Router>
      <div>
           <Helmet>
            <meta charSet="utf-8" />
            <title>Breakdown</title>
        </Helmet>

<div className="big">
  <img src={pic} className="pic " alt="" /> 
    <div >
      <div className="ls col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <h2><b>GET PRODUCTIVE</b></h2><br />
        <p><a href="http://localhost:3000/auth">LOGIN</a> OR <a href="http://localhost:3000/auth">SIGN UP</a></p><br />
      </div>

      <div className="form col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div className="App__Form">
          <div className="FormTitle">
          <NavLink to="/login" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink>
          or<NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
          </div>
          <Route  exact path="/" component={signupform}>
  
          </Route>
          <Route path="/login" component={login}>
          
          </Route>
          
          
        </div>
      </div>
    </div>  

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
    <Col xs={12} sm={4} md={4} className="f1">
      &copy; 2019 All rights reserved
    </Col>
    <Col xs={6} sm={4} md={4} className="f2">
     <img src={img} className="img" alt="" />             
    </Col>
    <div className="socialI">
      <Col xs={6} sm={4} md={4} className="f3">
        <ul>
          <li>
            <a href="https://www.instagram.com/motasimfoad/" className="twit">
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
  
 
  </Row>
   
      </div>
      </Router>
    );
  }
}

export default Main;
