const koa = require("koa");
const hello = require("./middleware/hello");
const responseTime = require("./middleware/response-time");
const app = new koa();

app.use(hello);
app.use(responseTime);

runableLog = () => {
  console.log("Server running at http://localhost:3000/");
};
app.listen(3000, runableLog);
