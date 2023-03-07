const Router = require("koa-router");
const UserController = require("../controller/user");

const getUserMiddleware = () => {
  const router = new Router({
    prefix: "/user",
  });
  const userController = new UserController();
  router.post("/update", userController.updateUserInfo.bind(userController));
  router.get("/info", userController.getUserInfo.bind(userController));

  return router.routes();
};

module.exports = getUserMiddleware;
