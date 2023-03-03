hello = async (ctx, next) => {
  ctx.helloText = "Hello World! " + Math.random();
  ctx.body = ctx.helloText;
};

module.exports = hello;
