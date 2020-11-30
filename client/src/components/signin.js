import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Card } from 'react-bootstrap'
import API from "../utils/API"
import SignUp from "./SignUp"
import Profile from "../views/Profile"



class SignInForm extends Component {
    constructor() {
        super();

        this.state = {

            emailAddress: '',
            userPassword: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    async handleSubmit(e) {
        e.preventDefault();
        const result = await API.loginUser({emailAddress: this.state.emailAddress,
        userPassword: this.state.userPassword})
        console.log("In signin result:",result)
        if (result){
          
        }
        // console.log('The form was submitted with the following data:');
        // console.log(this.state);
    }

    render() {
        return (
          <Router>
          <div class="row justify-content-center">  
      <div class="col-md-6">&nbsp;</div>
        <div class="col-md-6">
          <div class="card">
          <Card.Img src="https://wtop.com/wp-content/uploads/2016/12/ThinkstockPhotos-509640879.jpg" />
          <Card.Body>
            <Card.Title>
              Welcome to PET HOTEL
            </Card.Title>
          <form onSubmit={this.handleSubmit} className="form-group">
              <div className="form-group">
                <label className="form-group__Label" htmlFor="name">Email Address</label>
                <input type="text" id="emailAddress" className="form-control" placeholder="Enter your email address" name="emailAddress" value={this.state.emailAddress} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="password">Password</label>
                <input type="password" id="userPassword" className="form-control" placeholder="Enter your password" name="userPassword" value={this.state.userPassword} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                    <Link to="./SignUp" className="form-group__Link">Register</Link>
              </div>
            </form>            
          </Card.Body>
          <button className="btn btn-primary mr-3 form-Button mr-20" onClick={this.handleSubmit}>Sign In</button>
          </div>
        </div>
        </div>
        <Switch>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/SignUp">
                    <SignUp />
                </Route>

            </Switch>

        </Router>
        );
    }
}

export default SignInForm; 