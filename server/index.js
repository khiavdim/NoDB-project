// require("dotenv").config({ path: __dirname + "./../../.env" });
const express = require("express");
const app = express();
const cc = require("./controllers/contactController");
// const { SERVER_PORT } = process.env;
const SERVER_PORT = 4200;

app.use(express.json());

app.get("/api/contacts", cc.getContacts);
app.post("/api/contacts", cc.addContact);
app.put("/api/contacts/:id", cc.editContact);
app.delete("/api/contacts/:id", cc.deleteContact);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening from port ${SERVER_PORT}`);
});
