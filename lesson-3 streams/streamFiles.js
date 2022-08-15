const fs = require("fs");

const readStream = fs.createReadStream("./docs/readme.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/blog.txt");

// readStream.on("data", (chunk) => {
//   console.log(chunk.toString());
//   writeStream.write(chunk);
// });

//piping

readStream.pipe(writeStream);
