const fs = require("fs");
const path = require("path");

defaultContext = {};

module.exports = {
  /**
   * 在指定位置创建文件并写入内容
   * 如果已创建则只写入
   */
  async writeFile(dirName, fileName, context) {
    // 初始化文件夹
    var existFolder = await fs.existsSync("../data/" + dirName);
    if (!existFolder) {
      fs.mkdirSync("../data/" + dirName);
    }

    fs.writeFileSync(
      "../data/" + dirName + "/" + fileName + ".json",
      JSON.stringify(context)
    );
  },

  /**
   * 判断文件是否存在
   */
  async isFileExist(dirName, fileName) {
    var bool = fs.existsSync("../data/" + dirName + "/" + fileName + ".json");
    return bool;
  },

  /**
   * 读取JSON中的对象
   */
  async readFile(dirName, fileName) {
    // 用户存在
    var fileExist = fs.existsSync(
      "../data/" + dirName + "/" + fileName + ".json"
    );
    if (!fileExist) {
      return false;
    }

    // 读取内容
    var context = await fs.readFileSync(
      "../data/" + dirName + "/" + fileName + ".json"
    );
    return JSON.parse(context);
  },
};
