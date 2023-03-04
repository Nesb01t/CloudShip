const Koa = require("koa");
const Router = require("koa-router");
const colors = require("colors");

const hello = require("./middleware/hello");
const responseTime = require("./middleware/response-time");
const responseData = require("./middleware/response-data");

const app = new Koa();

app.use(hello);
app.use(responseData);
app.use(responseTime);

runableLog = () => {
  console.log("------------------------------------------".yellow.bold);
  console.log(" Server Running -> http://localhost:3000/");
  console.log("------------------------------------------".yellow.bold);
};
app.listen(3000, runableLog);
