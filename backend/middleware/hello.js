hello = async (ctx, next) => {
  ctx.helloText = "Hello World! " + Math.random();
  ctx.body = ctx.helloText;
  await next();
};

module.exports = hello;
