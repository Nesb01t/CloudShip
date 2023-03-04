const Koa = require("koa");
const colors = require("colors");

const app = new Koa();

// 服务器路由
const router = require("./router/router");
app.use(router);

// 数据响应中间件
const responseData = require("./middleware/response-data");
app.use(responseData);

// 服务器启动日志
runableLog = () => {
  console.log("------------------------------------------".yellow.bold);
  console.log(" Server Running -> http://localhost:3000/");
  console.log("------------------------------------------".yellow.bold);
};
app.listen(3000, runableLog);
