const fs = require("fs");
const path = require("path");

defaultContext = {};

module.exports = {
  createFile(dirName, fileName, context) {
    // 初始化文件夹
    if (!fs.existsSync("../data/" + dirName)) {
      fs.mkdirSync("../data/" + dirName);
    }

    // 写入内容
    if (context == null) {
      context == defaultContext;
    }
    fs.writeFileSync(
      "../data/" + dirName + "/" + fileName + ".json",
      JSON.stringify(context)
    );
  },
  readFile(dirName, fileName) {
    if (this.isFileExist(dirName, fileName)) {
      var context = fs.readFileSync(
        "../data/" + dirName + "/" + fileName + ".json"
      );
      return JSON.parse(context);
    }
  },
  isFileExist(dirName, fileName) {
    return fs.existsSync("../data/" + dirName + "/" + fileName + ".json");
  },
};
