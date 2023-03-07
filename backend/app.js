const Koa = require("koa");
const colors = require("colors");
const bodyParser = require("koa-bodyparser");

const router = require("./router/router");
const responseData = require("./middleware/response-data");

const app = new Koa();
app.use(bodyParser());
app.use(router);
app.use(responseData);

// 服务器启动日志
runableLog = () => {
  console.log("------------------------------------------".yellow.bold);
  console.log(" Server Running -> http://localhost:3000/");
  console.log("------------------------------------------".yellow.bold);
};
app.listen(3000, runableLog);
