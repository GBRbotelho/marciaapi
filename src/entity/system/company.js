const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  plan: {
    type: Number,
    required: true,
    default: 0,
  },
  active: {
    type: Boolean,
    required: true,
    default: false,
  },
  dateInitial: {
    type: Date,
  },
  dateFinal: {
    type: Date,
  },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
