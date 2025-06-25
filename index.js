const http = require("http");
http
  .createServer((req, resp) => {
    resp.write("<h1>Hello MD d ssss ddddd</h1>");

    resp.end();
  })
  .listen(7786);
