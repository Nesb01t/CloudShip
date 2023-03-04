const fs = require("fs");
const path = require("path");

testobject = {
  hello: "hello",
  getHello: () => {
    console.log(this.hello);
  },
};
file = {
  createFile(name) {
    name = name.replace("/", "");
    ctx = JSON.stringify(testobject);
    fs.writeFileSync("data/" + name + ".json", ctx, (error) => {
      if (error) {
        console.log("CreateFileError");
      } else {
        console.log("CreateFileSuccess");
      }
    });
  },
};

module.exports = file;
