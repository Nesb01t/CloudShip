const Koa = require("koa");
const Router = require("koa-router");
const colors = require("colors");
const hello = require("./middleware/hello");
const responseTime = require("./middleware/response-time");

const app = new Koa();
const router = new Router();

const user = require("./routes/user");

router.prefix("/api");
router.get("/", async (ctx) => {
  ctx.body = "hello world";
});
router.use("/user", user.routes());

app.use(router.routes()).use(router.allowedMethods());
app.use(hello);
app.use(responseTime);

runableLog = () => {
  console.log("------------------------------------------".yellow.bold);
  console.log(" Server Running -> http://localhost:3000/");
  console.log("------------------------------------------".yellow.bold);
};
app.listen(3000, runableLog);
