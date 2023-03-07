const Router = require("koa-router");
const AutoConroller = require("../controller/auth");

const getAuthMiddleware = () => {
  const router = new Router({
    prefix: "/auth",
  });
  const autoConroller = new AutoConroller();
  router.post("/login", autoConroller.userLogin.bind(autoConroller));

  return router.routes();
};

module.exports = getAuthMiddleware;
