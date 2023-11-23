const express = require("express");
const createContact = require("./controllers/createContact");
const getContact = require("./controllers/getContact");
const updateContact = require("./controllers/updateContact");
const deleteContact = require("./controllers/deleteContact");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

const url = "https://fortesting-team.myfreshworks.com/crm/sales/api/contacts";
const apiKey = process.env.API_KEY; ///***Use Your API key HERE***\\\

const headers = {
  Authorization: `Token token=${apiKey}`,
  "Content-Type": "application/json",
};
////////////Create Contact

app.post("/createContact", (req, res) => {
  createContact.createContactHandle(req, res, url, headers);
});

////////////Get Contact

app.post("/getContact", (req, res) => {
  getContact.getContactHandle(req, res, url, headers);
});

////////////Update Contact

app.post("/updateContact", (req, res) => {
  updateContact.updateContactHandle(req, res, url, headers);
});

////////////Delete Contact

app.post("/deleteContact", (req, res) => {
  deleteContact.deleteContactHandle(req, res, url, headers);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
