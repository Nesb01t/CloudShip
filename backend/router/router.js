const Router = require("koa-router");
const router = new Router();
const files = require("../utils/files");

router
  .get("/", async (ctx) => {
    ctx.type = "html";
    ctx.body = "<h1>hello world!</h1>";
  })
  .post("/user/login", async (ctx) => {
    ctx.body = "Create a new user";
    files.createFile("user", Math.random().toString(36).slice(-8));
  });

module.exports = router.routes();
