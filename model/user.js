const { default: mongoose } = require("mongoose");
let mongo = require("mongoose");
let userSchema = mongo.Schema({
  name: { type: String },
  pass: { type: String },
  mobile: { type: Number },
  email: { type: String },
  user_auth:{ type: String, enum: ['Blocked', 'Unblocked'], default: 'Unblocked' }

});
module.exports = mongo.model("user", userSchema);
