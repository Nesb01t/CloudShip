const file = require("../utils/files");

class User {
  constructor() {}
  login(name, password) {
    if (this.exist(name)) {
      // 登录
      var user = file.readFile("user", name);
      if (password === user.password) {
        return true;
      } else {
        return false;
      }
    }
  }

  exist(name) {
    return file.isFileExist("user", name);
  }
}

module.exports = User;
