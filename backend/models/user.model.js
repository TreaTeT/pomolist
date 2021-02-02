const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minLength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    unfinishedTasks: [
      {
        task: {
          type: String,
          required: false,
          unique: false,
          trim: true,
        },
        _id: {
          type: String,
          unique: true,
        },
      },
    ],
    cycles: {
      type: Number,
      required: false,
    },
    tasks: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.pre("save", function (next) {
//   let user = this;
//   if (!user.isModified("password")) return next();

//   if (user.password) {
//     bcrypt.genSalt(10, (err, salt) => {
//       if (err) return next(err);
//       bcrypt.hash(user.password, salt, null, (err, hash) => {
//         if (err) return next(err);
//         user.password = hash;
//         next(err);
//       });
//     });
//   }
// });

const User = mongoose.model("User", userSchema);

module.exports = User;
