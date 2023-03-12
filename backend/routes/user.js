const { default: koaBody } = require("koa-body");
const Router = require("koa-router");
const UserController = require("../controller/user");

const getUserMiddleware = () => {
  const router = new Router({
    prefix: "/user",
  });
  const userController = new UserController();
  router.post("/update", userController.updateUserInfo.bind(userController));
  router.post(
    "/profile",
    // koaBody({
    //   multipart: true,
    //   formidable: {
    //     uploadDir: "../../data/profile",
    //     keepExtensions: true,
    //     maxFileSize: 200 * 1024 * 1024,
    //   },
    // }),
    userController.updateUserProfile.bind(userController)
  );
  router.get("/info", userController.getUserInfo.bind(userController));

  return router.routes();
};

module.exports = getUserMiddleware;
