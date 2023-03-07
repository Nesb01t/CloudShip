const router = require("koa-router")();

router.get("/user/login", (ctx) => {
  ctx.body = { name: "张三" };
});

module.exports = router;
