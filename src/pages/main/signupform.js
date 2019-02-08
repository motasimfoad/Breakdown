import React, { Component } from 'react';

class signupform extends Component{
    render(){
        return(
            <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="FormField__Input" placeholder="name" />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Email</label>
                <input type="text" id="email" name="email" className="FormField__Input" placeholder="email" />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="FormField__Input" placeholder="Password" />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Contact Number</label>
                <input type="text" id="cnum" name="cnum" className="FormField__Input" placeholder="Contact Number" />
              </div>
              {/* In signup page */}
              {/* <div className="FormField">
                <button className="FormField__Button mr-20">Login</button>
                <a href="#" className="FormField__Link">Already a member</a>
              </div> */}
            </form>
          </div>
        );
    }
}
export default signupform;