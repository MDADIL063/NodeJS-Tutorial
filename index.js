// const http = require("http");
// const data = require("./app");

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "application/json" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(7786);
// const fs = require("fs");
// const input = process.argv;

// fs.writeFileSync(input[2], input[3]);

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + "/hello" + i + ".txt", "simple text");
// }
// console.log(dirPath);

// fs.readdir(dirPath, (err, files) => {
//   files.forEach((i) => {
//     console.log(i);
//   });
// console.log(files);
// });

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
const filePath = `${dirPath}/hello0.txt`;
// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filePath, "with md", (err) => {
//   if (!err) console.log("program completed");
// });

// fs.rename(filePath, `${dirPath}/md.txt`, (err) => {
//   if (!err) console.log("program completed");
// });

// fs.unlinkSync(`${dirPath}/md.txt`);
