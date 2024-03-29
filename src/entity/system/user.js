const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  companies: [
    {
      companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      role: {
        type: String,
        default: "employee",
      },
    },
  ],

  isEmailVerified: {
    type: String,
    default: "NO",
  },
  code: {
    type: String,
  },
});

module.exports = userSchema;
