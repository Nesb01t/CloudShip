const Router = require("koa-router");

const files = require("../utils/files");
const User = require("../controller/user");

const router = new Router();
const user = new User();

router
  .get("/", async (ctx) => {
    ctx.type = "html";
    ctx.body = "<h1>hello world!</h1>";
  })
  .post("/user/login", async (ctx) => {
    var req = ctx.request.body;
    var name = req.name; // 文件名和用户名相同
    var password = req.password;

    if (user.exist(name)) {
      // login user
      if (user.login(name, password)) {
        ctx.body = "欢迎回来";
      } else {
        ctx.body = "密码错误";
      }
    } else {
      // register user
      files.createFile("user", name, req);
      ctx.body = "注册成功";
    }
  });

module.exports = router.routes();
