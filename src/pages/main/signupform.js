import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from "react-bootstrap";



class signupform extends Component{
  constructor(){
    super();

    this.state={
      name:'',
      email: '',
      password: '',
      cnum:''

      
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
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="name">Name</label> */}
                <input type="text" id="name" name="name" className="FormField__Input" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
              </div>
              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="name">Email</label> */}
                <input type="text" id="email" name="email" className="FormField__Input" placeholder="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="password">Password</label> */}
                <input type="password" id="password" name="password" className="FormField__Input" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
              </div>
              <div className="FormField">
                {/* <label className="FormField__Label" htmlFor="name">Contact Number</label> */}
                <input type="text" id="cnum" name="cnum" className="FormField__Input" placeholder="Contact Number" value={this.state.cnum} onChange={this.handleChange}/>
              </div>
              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="#" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>
              <div className="FormField">
              {/* <Button className="FormField__Button" as="input" type="submit" value="Submit">Sign Up</Button> */}
                <button className="FormField__Button mr-20">Sign Up</button>
                <Link to ="/login"className="FormField__Link">Already a member ?</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default signupform;