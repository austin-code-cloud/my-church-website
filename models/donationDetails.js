const DB = require("../configs/db");
const donorSchema = new DB.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  reference: {
    type: String,
    required: true,
  },
});
const Donor = DB.model("Donor", donorSchema);
module.exports = { Donor };
