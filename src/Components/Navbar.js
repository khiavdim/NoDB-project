import React, { Component } from "react";
import "./Navbar.css";
import Title from './Title'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: true,
      firstName:'',
      lastName: '',
      birthday: '',
      email: '',
      phone: '',
      image: '',
      relation: ''
    }
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
      this.props.addContact(this.state)
      this.setState({
        firstName:'',
        lastName: '',
        birthday: '',
        email: '',
        phone: '',
        image: '',
        relation: '',
        adding: false
      })
  }


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
                value={firstName}
                onChange={this.handleChange}
                name="firstName"
                placeholder="First Name"
              />
              <input
                value={lastName}
                onChange={this.handleChange}
                name="lastName"
                placeholder="Last Name"
              />
              <input
                value={birthday}
                onChange={this.handleChange}
                name="birthday"
                placeholder="Birthday"
              />
              <input
                value={phone}
                onChange={this.handleChange}
                name="phone"
                placeholder="Phone"
              />
              <input
                value={email}
                onChange={this.handleChange}
                name="email"
                placeholder=" Email"
              />
              <input
                value={relation}
                onChange={this.handleChange}
                name="relation"
                placeholder="Relation"
              />
              <input
                value={image}
                onChange={this.handleChange}
                name="image"
                placeholder="Image URL"
              />
              <section className="navButtons">
                <button onClick={this.handleSubmit}>submit contact</button>
              </section>
            </section>
          ) : (
            <section className="addSection">
              <text className="addDir">successfully added contact</text>
              <br></br>
              <button onClick={this.flipAdd}>
              <i class="fas fa-plus-square">{" "}<text>add new contact</text></i></button>
            </section>
          )}
        </nav>
      </div>
    );
  }
}
