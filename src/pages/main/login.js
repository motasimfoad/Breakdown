import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class login extends Component{
  constructor(){
    super();

    this.state={
      email: '',
      password: ''
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e){
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState(
      {
        [name]: value
      }
    );
  }
  handleSubmit(e){
    e.preventDefault();

    console.log('Form submitted with ');
    console.log(this.state)
  }
    render(){
        return(
              <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" >
              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="name">Email</label> */}
                <input type="text" id="email" name="email" className="FormField__Input" placeholder="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="password">Password</label> */}
                <input type="password" id="password" name="password" className="FormField__Input" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
              </div>
              <div className="FormField">
                <button className="FormField__Button mr-20">Login</button>
                <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default login;