const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  civilName: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  cpf: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
  },
  knowMyWork: {
    type: String,
  },
});

module.exports = clientSchema;
