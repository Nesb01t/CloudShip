const files = require("../utils/files");

module.exports = async (ctx, next) => {
  const url = ctx.request.url;
//   files.createFile(Math.floor(Math.random() * 10000).toString(10));
  await next();
};
