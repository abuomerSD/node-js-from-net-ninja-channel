const fs = require("fs");

// read files

fs.readFile("./docs/readme.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// write files

fs.writeFile("./docs/write.txt", "write file", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("file writes successfully");
});

// create directories

fs.mkdir("mkdirTest5", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("dir created");
});

//delete dir

fs.rmdir("./mkdirTest4", (err) => {
  console.log(err);
});
