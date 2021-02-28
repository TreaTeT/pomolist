const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/users/all", controller.allAccess);
  app.get("/api/users/user", [authJwt.verifyToken], controller.userBoard);
  app.put("/api/users/update_stats/:id", controller.userStatsUpdate);
  app.put(
    "/api/users/save_unfinished_tasks/:id",
    controller.saveUnfinishedTasks
  );
  app.get("/api/users/get_user_tasks/:id", controller.getUserTasks);
};
