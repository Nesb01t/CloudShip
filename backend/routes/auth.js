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
// router
//   .get("/", async (ctx) => {
//     ctx.type = "html";
//     ctx.body = "<h1>hello world!</h1>";
//   })
//   .post("/user/login", async (ctx) => {
//     var req = ctx.request.body;
//     var name = req.name; // 文件名和用户名相同
//     var password = req.password;

//     if (user.exist(name)) {
//       // login user
//       if (user.login(name, password)) {
//         ctx.body = "欢迎回来";
//       } else {
//         ctx.body = "密码错误";
//       }
//     } else {
//       // register user
//       files.createFile("user", name, req);
//       ctx.body = "注册成功";
//     }
//   });
