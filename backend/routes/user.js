const router = require("koa-router")();

router.get("/", (ctx) => {
  ctx.body = { name: "张三" };
});

module.exports = router;
