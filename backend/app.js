const koa = require("koa");
const colors = require("colors");
const hello = require("./middleware/hello");
const responseTime = require("./middleware/response-time");

const app = new koa();

app.use(hello);
app.use(responseTime);

runableLog = () => {
  console.log("------------------------------------------".yellow.bold);
  console.log(" Server Running -> http://localhost:3000/");
  console.log("------------------------------------------".yellow.bold);
};
app.listen(3000, runableLog);
