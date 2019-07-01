let contacts = [
  {
    id: 1,
    firstName: "Kerry",
    lastName: "Johnson",
    birthday: "07/05/1996",
    phone: "123-456-7890",
    email: "kerryjohnson@gmail.com",
    relation: "Friend",
    image:
      "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3391&q=80"
  },
  {
    id: 2,
    firstName: "Xyivfab",
    lastName: "Lee",
    birthday: "05/02/2004",
    phone: "234-567-8901",
    email: "amylee@gmail.com",
    relation: "Niece",
    image:
      "https://images.unsplash.com/photo-1493256486438-f41aa1286bb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 3,
    firstName: "Lisa",
    lastName: "Lee",
    birthday: "11/11/1992",
    phone: "345-678-9012",
    email: "lisalee@gmail.com",
    relation: "Sister",
    image:
      "https://images.unsplash.com/photo-1490086228150-75b07dbbe969?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Lee",
    birthday: "12/21/1988",
    phone: "456-789-0123",
    email: "davidlee@gmail.com",
    relation: "Brother",
    image:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 5,
    firstName: "Erin",
    lastName: "Smith",
    birthday: "08/15/1994",
    phone: "567-890-1234",
    email: "erinsmith@gmail.com",
    relation: "Friend",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 6,
    firstName: "Jamie",
    lastName: "Smith",
    birthday: "10/02/1990",
    phone: "678-901-2345",
    email: "jamiesmith@gmail.com",
    relation: "Friend",
    image:
      "https://images.unsplash.com/photo-1526927071144-dbe4c41835e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
  },
  {
    id: 7,
    firstName: "Jake",
    lastName: "Jordan",
    birthday: "08/12/1988",
    phone: "789-012-3456",
    email: "jakejordan@gmail.com",
    relation: "Friend",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
  },
  {
    id: 8,
    firstName: "Michelle",
    lastName: "Mitchell",
    birthday: "04/04/1984",
    phone: "890-123-4567",
    email: "michellemitchell@gmail.com",
    relation: "Co-Worker",
    image:
      "https://images.unsplash.com/photo-1492814580460-1f9a2a463cfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 9,
    firstName: "Lucy",
    lastName: "Lorde",
    birthday: "02/16/1996",
    phone: "901-234-5678",
    email: "lucylorde@gmail.com",
    relation: "Co-Worker",
    image:
      "https://images.unsplash.com/photo-1480914362564-9f2c2634e266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 10,
    firstName: "Tiatu",
    lastName: "Lee",
    birthday: "11/20/2008",
    phone: "987-654-3210",
    email: "tiatu@gmail.com",
    relation: "Nephew",
    image:
      "https://images.unsplash.com/photo-1479685894911-37e888d38f0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
  }
];

let id = 11;

module.exports = {
  getContacts(req, res) {
    res.status(200).send(contacts);
  },

  addContact(req, res) {
    let {
      image,
      firstName,
      lastName,
      birthday,
      phone,
      email,
      relation
    } = req.body;
    let newContact = {
      id,
      firstName,
      lastName,
      birthday,
      phone,
      email,
      relation,
      image
    };
    id++;
    contacts.push(newContact);
    res.status(200).send(contacts);
  },

  editContact(req, res) {
    let { id } = req.params;
    let {
      image,
      firstName,
      lastName,
      birthday,
      phone,
      email,
      relation
    } = req.query;
    let index = contacts.findIndex(contact => contact.id === +id);
    contacts[index].image = image;
    contacts[index].firstName = firstName;
    contacts[index].lastName = lastName;
    contacts[index].birthday = birthday;
    contacts[index].phone = phone;
    contacts[index].email = email;
    contacts[index].relation = relation;
    res.status(200).send(contacts);
  },

  deleteContact(req, res) {
    let { id } = req.params;
    let index = contacts.findIndex(contacts => contacts.id === +id);
    index !== -1 && contacts.splice(index, 1);
    res.status(200).send(contacts);
  }
};
