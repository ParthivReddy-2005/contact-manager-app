const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please enter the username"],
    },
    email: {
      type: String,
      required: [true, "please enter the mail"],
      unique: [true],
    },
    password: {
      type: String,
      requied: [true, "please enter the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);