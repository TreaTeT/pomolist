const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

let jwt = require("jsonwebtoken");
let bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  let tasks = [{ task: "this is a taks", _id: "dratjghfslfjh" }];
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    unfinishedTasks: tasks,
    cycles: 0,
    tasks: 0,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "User was registered succesfully!" });
  });
};

exports.singin = (req, res) => {
  User.findOne({
    name: req.body.name,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User Not Found!" });
    }

    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res
        .status(401)
        .send({ accessToken: null, message: "Invalid Password!" });
    }

    let token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400,
    });

    res.status(200).send({
      id: user._id,
      name: user.name,
      email: user.email,
      accessToken: token,
    });
  });
};
