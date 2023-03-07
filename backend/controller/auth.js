const { writeFile } = require("../utils/file");
const fileUtils = require("../utils/file");

class AuthController {
  constructor() {}
  /**
   * 用户登录
   */
  async userLogin(ctx) {
    const body = ctx.request.body;
    const userName = body.name;
    const userPassword = body.password;

    if (userName == undefined) {
      ctx.status = 400;
      ctx.body = "user name undefined";
      return;
    }
    if (userPassword == undefined) {
      ctx.status = 400;
      ctx.body = "user password undefined";
      return;
    }

    // 是否需要注册
    var userRegistered = await isUserRegistered(userName);
    if (!userRegistered) {
      userRegister(userName, userPassword);
      ctx.body = "user has not been registered, trying to create the one";
      return;
    }

    // 是否密码错误
    var user = fileUtils.readFile("user", userName);
    if (userPassword === user.password) {
      ctx.status = 400;
      ctx.body = "wrong password";
      return;
    }
  }
}

/**
 * 用户是否注册
 */
async function isUserRegistered(userName) {
  return fileUtils.isFileExist("user", userName);
}

/**
 * 用户注册入库
 */
async function userRegister(userName, userPassword) {
  var fileContext = { name: userName, password: userPassword };
  writeFile("user", userName, fileContext);
  console.log(fileContext);
}

module.exports = AuthController;
