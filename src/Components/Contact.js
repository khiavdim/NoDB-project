import React, { Component } from "react";
import "./Contact.css";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      firstName: props.contact.firstName,
      lastName: props.contact.lastName,
      birthday: props.contact.birthday,
      email: props.contact.email,
      phone: props.contact.phone,
      image: props.contact.image,
      relation: props.contact.relation
    };
  }
  flipEdit = () => {
    this.setState({
      editting: !this.state.editting
    });
  };

  handleEdit = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  saveEdit = e => {
    if (e.target.value !== e.target.placeholder) {
      this.props.editContact(this.props.contact.id, this.state);
    }
    this.setState({ editting: false });
  };

  render() {
    let { contact } = this.props;
    let {
      editting,
      firstName,
      lastName,
      birthday,
      phone,
      email,
      relation,
      image
    } = this.state;
    return (
      <div className="contactWindow">
          {!editting ? (
            <div className="contactCards">
                <section className="contactInfo">
                  <img src={contact.image} alt={contact.firstName} />
                  <header><h2>
                    {contact.firstName} {contact.lastName}
                  </h2></header>
                  <p>birthday: {contact.birthday}</p>
                  <p>phone number: {contact.phone}</p>
                  <p>email: {contact.email}</p>
                  <p>relation: {contact.relation}</p>
                </section>
                <section className="buttons">
                  <button onClick={this.flipEdit}>edit</button>
                  <button onClick={() => this.props.deleteContact(this.props.contact.id)}>delete</button>
                </section>
            </div>
          ) : (
            <div className="contactCards">
              <img src={contact.image} alt={contact.firstName} />
                <p>
                  <input
                    className="names"
                    value={firstName}
                    onChange={this.handleEdit}
                    name="firstName"
                    placeholder={contact.firstName}
                  />{" "}
                  {` `}
                  <input
                    className="names"
                    value={lastName}
                    onChange={this.handleEdit}
                    name="lastName"
                    placeholder={contact.lastName}
                  />
                </p>
                <p>
                  <input
                    value={birthday}
                    onChange={this.handleEdit}
                    name="birthday"
                    placeholder={contact.birthday}
                  />
                </p>
                <p>
                  <input
                    value={phone}
                    onChange={this.handleEdit}
                    name="phone"
                    placeholder={contact.phone}
                  />
                </p>
                <p>
                  <input
                    value={email}
                    onChange={this.handleEdit}
                    name="email"
                    placeholder={contact.email}
                  />
                </p>
                <p>
                  <input
                    value={relation}
                    onChange={this.handleEdit}
                    name="relation"
                    placeholder={contact.relation}
                  />
                </p>
                <p>
                  <input
                    value={image}
                    onChange={this.handleEdit}
                    name="image"
                    placeholder={contact.image}
                  />
                </p>
                <div className="edit_buttons">
                  <button align="left" onClick={e => this.saveEdit(e)}>confirm edit</button>
                  <button align="right" onClick={this.deleteContact}>delete contact</button>
                </div>
            </div>
          )}
      </div>
    );
  }
}
