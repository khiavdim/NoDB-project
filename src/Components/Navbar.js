import React, { Component } from "react";
import "./Navbar.css";
import Title from "./Title";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: true,
      firstName: "",
      lastName: "",
      birthday: "",
      email: "",
      phone: "",
      image: "",
      relation: ""
    };
  }

  flipAdd = () => {
    this.setState({
      adding: !this.state.adding
    });
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.addContact(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      birthday: "",
      email: "",
      phone: "",
      image: "",
      relation: "",
      adding: false
    });
  };

  render() {
    let {
      adding,
      firstName,
      lastName,
      birthday,
      email,
      phone,
      relation,
      image
    } = this.state;
    return (
      <div className="greenNav">
        <nav>
          <Title />
          {adding ? (
            <section className="addSection">
              <div className="addDir">add a new contact below</div>
              <input
                className="navInput"
                value={firstName}
                onChange={this.handleChange}
                name="firstName"
                placeholder="First Name"
              />
              <input
                className="navInput"
                value={lastName}
                onChange={this.handleChange}
                name="lastName"
                placeholder="Last Name"
              />
              <input
                className="navInput"
                value={birthday}
                onChange={this.handleChange}
                name="birthday"
                placeholder="Birthday"
              />
              <input
                className="navInput"
                value={phone}
                onChange={this.handleChange}
                name="phone"
                placeholder="Phone"
              />
              <input
                className="navInput"
                value={email}
                onChange={this.handleChange}
                name="email"
                placeholder="Email"
              />
              <input
                className="navInput"
                value={relation}
                onChange={this.handleChange}
                name="relation"
                placeholder="Relation"
              />
              <input
                className="navInput"
                value={image}
                onChange={this.handleChange}
                name="image"
                placeholder="Image URL"
              />
              <div>
                <i
                  onClick={this.handleSubmit}
                  className="fas fa-plus-square fa-lg"
                  id="navIcons"
                />
              </div>
            </section>
          ) : (
            <section className="addSection">
              <div className="addDir">
                successfully added<p>contact to the</p>
                <p>beginning</p>
              </div>
              <p> </p>
              <i
                align="right"
                onClick={this.flipAdd}
                className="fas fa-plus-square fa-lg"
                id="navIcons"
              >
                {" "}
                <div className="addDir1">add contact</div>
              </i>
            </section>
          )}
        </nav>
      </div>
    );
  }
}
