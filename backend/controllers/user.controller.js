const db = require("../models");
const User = db.user;

exports.userStatsUpdate = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      cycles: req.body.cycles,
      tasks: req.body.tasks,
    },
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "User not found!",
        });
      } else {
        res.send({ message: "Stats were updates succesfully!" });
      }
    })
    .catch((err) => {
      res.stats(500).send({
        message: "Error updating user with id= " + req.body.id,
      });
    });
};

exports.saveUnfinishedTasks = (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      unfinishedTasks: req.body.unfinishedTasks,
    },
    { useFindAndModify: false }
  )
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "User not found!" });
      } else {
        res.status(200).send({ message: "Unfinished tasks were saved!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Error saving tasks!" });
    });
};

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
