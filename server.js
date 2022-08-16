const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);

  response.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (request.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      response.end();
    } else {
      response.write(data);
      response.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("server started");
});
