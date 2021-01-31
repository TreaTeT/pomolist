const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcryptjs");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post((req, res) => {
  const { name, password, email } = req.body;
  // finished tasks and cycles are 0 at registration
  const tasks = 0;
  const cycles = 0;
  // create new user with given credentials
  const newUser = new User({
    name,
    email,
    password,
    tasks,
    cycles,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then((user) => res.json(user))
        .catch((user) => console.log(err));
    });
  });

  //   // save the user in database
  //   newUser
  //     .save()
  //     .then(() => res.json("User added!"))
  //     .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
