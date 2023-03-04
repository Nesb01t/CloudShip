const fs = require("fs");
const path = require("path");

testobject = {
  hello: "hello",
  getHello: () => {
    console.log(this.hello);
  },
};
file = {
  createFile(dirName, name) {
    // 初始化文件夹
    if (!fs.existsSync("../data/" + dirName)) {
      fs.mkdirSync("../data/" + dirName);
    }

    // 写入内容
    ctx = JSON.stringify(testobject);
    fs.writeFileSync("../data/" + dirName + "/" + name + ".json", ctx);
  },
};

module.exports = file;
