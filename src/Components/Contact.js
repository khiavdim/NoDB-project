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
    this.props.editContact(this.props.contact.id, this.state);
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
                  <i onClick={this.flipEdit} className="fas fa-pen-square fa-2x"></i>
                  <i onClick={() => this.props.deleteContact(this.props.contact.id)} className="fas fa-minus-square fa-2x"></i>
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
                  <input className="edit"
                    value={birthday}
                    onChange={this.handleEdit}
                    name="birthday"
                    placeholder={contact.birthday}
                  />
                </p>
                <p>
                  <input className="edit"
                    value={phone}
                    type="tel"
                    onChange={this.handleEdit}
                    name="phone"
                    placeholder={contact.phone}
                  />
                </p>
                <p>
                  <input className="edit"
                    value={email}
                    onChange={this.handleEdit}
                    name="email"
                    placeholder={contact.email}
                  />
                </p>
                <p>
                  <input className="edit"
                    value={relation}
                    onChange={this.handleEdit}
                    name="relation"
                    placeholder={contact.relation}
                  />
                </p>
                <p>
                  <input className="edit"
                    value={image}
                    onChange={this.handleEdit}
                    name="image"
                    placeholder={contact.image}
                  />
                </p>
                <div className="edit_buttons">
                  <i onClick={e => this.saveEdit(e)} className="fas fa-check-square fa-2x"></i>
                  <i onClick={() => this.props.deleteContact(this.props.contact.id)} className="fas fa-minus-square fa-2x"></i>
                </div>
            </div>
          )}
      </div>
    );
  }
}
