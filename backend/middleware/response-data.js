const files = require("../utils/files");

module.exports = async (ctx, next) => {
  const url = ctx.request.url;
  ctx.body += "\nmiddleware data";
  files.createFile(ctx.request.url);
  await next();
};
