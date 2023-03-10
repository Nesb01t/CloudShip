const fileUtils = require("../utils/file");

class UserController {
  constructor() {}
  /**
   * 更新用户数据
   */
  async updateUserInfo(ctx) {
    // 地址、姓名、照片等等
    const body = ctx.request.body;
    const userName = body.name;
    const userPassword = body.password;
    const userStates = body.states;
    const user = {
      name: userName,
      password: userPassword,
      states: userStates,
    };
    console.log(user);
    await fileUtils.writeFile("user", userName, user);
  }

  /**
   * 获取用户数据
   */
  async getUserInfo(ctx) {
    const body = ctx.query;
    const userName = body.name;
    const user = await fileUtils.readFile("user", userName);
    if (user == false) {
      ctx.status = 210;
    }
    ctx.body = JSON.stringify(user);
  }
}

module.exports = UserController;
