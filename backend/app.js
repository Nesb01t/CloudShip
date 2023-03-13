const Koa = require("koa");
const colors = require("colors");
const { koaBody } = require("koa-body");
const AutoConroller = require("./routes/auth");
const UserConroller = require("./routes/user");

const app = new Koa();
app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: "../data/profile",
      keepExtensions: true,
      maxFileSize: 200 * 1024 * 1024,
    },
  })
);
app.use(AutoConroller());
app.use(UserConroller());

// 服务器启动日志
runableLog = () => {
  console.log("------------------------------------------".yellow.bold);
  console.log(" Server Running -> http://localhost:3000/");
  console.log("------------------------------------------".yellow.bold);
};
app.listen(3000, runableLog);
