const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      // required: true,
      // unique: false,
      // trim: true,
      // minLength: 3,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
      // trim: true,
    },
    password: {
      type: String,
      // required: true,
      // unique: true,
      // trim: true,
    },
    unfinishedTasks: [
      {
        task: {
          type: String,
          // required: false,
          // unique: false,
          // trim: true,
        },
        _id: {
          type: String,
          unique: true,
          sparse: true,
        },
        checked: {
          type: Boolean,
        },
      },
    ],
    cycles: {
      type: Number,
      // required: false,
    },
    tasks: {
      type: Number,
      // required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
