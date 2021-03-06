import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class RegisterPet extends Component {
  constructor() {
    super();

    this.state = {
      ownerId: "",
      petName: "",
      breed: "",
      size: "",
      note: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const result = await API.addPet({
      ownerId: localStorage.userId,
      petName: this.state.petName,
      breed: this.state.breed,
      size: this.state.size,
      note: this.state.note,
    });
    console.log("ADD PET RESULT: ", result);
    API.updateUser({id: result.data._id, ownerId: localStorage.userId});
  }
  render() {
    return (
      <div className="container mt-3">
      <div className="row">
          <div className="col col-md-12 col-xl-10 col-lg-8 col-sm-6">
          <div className="display-4 mb-3 text-centre" style={{fontFamily: 'Oswald', color: "#FFCE00", textAlign: 'center',}}>Register Your Pet</div>
            <form onSubmit={this.handleSubmit} className="form-group" style={{marginTop: "50px"}}>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="name">Pets Name: </label>
                <input type="text" id="petName" className="form-control" placeholder="Enter your full name" name="petName" value={this.state.petName} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="phone">Breed: </label>
                <input type="text" id="breed" className="form-control" placeholder="Enter your phone number" name="breed" value={this.state.breed} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="password">Size: </label>
                <input type="size" id="userPassword" className="form-control" placeholder="Enter your password" name="size" value={this.state.size} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-group__Label" htmlFor="email">Special Requirements</label>
                <textarea type="note" id="emailAddress" className="form-control" placeholder="Enter the special requirements" name="note" value={this.state.note} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                  <button className="btn btn-primary mr-3 form-Button mr-20" onClick={this.handleSubmit}>Register</button>
              </div>
            </form>
          </div>
      </div>
  </div>
);
}
}
export default RegisterPet;
