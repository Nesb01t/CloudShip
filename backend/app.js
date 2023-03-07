const Koa = require("koa");
const colors = require("colors");
const bodyParser = require("koa-bodyparser");
const AutoConroller = require("./routes/auth");

const app = new Koa();
app.use(bodyParser());
app.use(AutoConroller());

// 服务器启动日志
runableLog = () => {
  console.log("------------------------------------------".yellow.bold);
  console.log(" Server Running -> http://localhost:3000/");
  console.log("------------------------------------------".yellow.bold);
};
app.listen(3000, runableLog);
