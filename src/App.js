import React, { Component } from "react";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      image: "",
    };
  }

  componentDidMount() {
    axios
      .get("/api/contacts")
      .then(res => {
        this.setState({ contacts: res.data });
      })
      .catch(err => {
        console.log("Error from server", err);
      });
  }

  addContact = newContact => {
    let {
      image,
      firstName,
      lastName,
      birthday,
      email,
      phone,
      relation
    } = newContact;
    axios
      .post("/api/contacts", {
        firstName,
        lastName,
        birthday,
        email,
        phone,
        image,
        relation
      })
      .then(res => {
        this.setState({ contacts: res.data });
      })
      .catch(err => console.log("Error from server", err));
  };

  editContact = (id, contact) => {
    let {
      image,
      firstName,
      lastName,
      birthday,
      email,
      phone,
      relation
    } = contact;
    axios
      .put(
        `/api/contacts/${id}?firstName=${firstName}
        &lastName=${lastName}
        &phone=${phone}
        &email=${email}
        &birthday=${birthday}
        &image=${image}
        &relation=${relation}`
      )
      .then(res => {
        this.setState({ contacts: res.data });
      })
      .catch(err => {
        console.log("Could not update contact", err);
      });
  };

  deleteContact = id => {
    axios
      .delete(`/api/contacts/${id}`)
      .then(res => {
        console.log("res from delete");
        this.setState({ contacts: res.data });
      })
      .catch(err => console.log("Could not delete", err));
  };

  render() {
    let { contacts, image} = this.state;
    return (
      <div id="rotate">
          <Navbar
            contacts={contacts}
            addContact={this.addContact}
            image={image}
          />
          {contacts.map(contact => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
                editContact={this.editContact}
                deleteContact={this.deleteContact}
              />
            );
          })}
      </div>
    );
  }
}

export default App;
