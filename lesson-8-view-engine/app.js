const express = require("express");
const morgan = require("morgan");
const app = express();

app.listen(3000);

// register view engine

app.set("view engine", "ejs");

//middleware and static files

app.use(express.static("public"));

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("request made");
  next();
});

app.get("/", (req, res) => {
  let name = " eltayeb ibrahim";
  const blogs = [
    { title: "Learn Html", snippet: "Hyber text markup language" },
    { title: "Learn CSS", snippet: "Cascadin Style Sheet " },
  ];
  res.render("index", { blogs: blogs, title: name });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

app.use((req, res) => {
  res.status(404).render("404");
});
