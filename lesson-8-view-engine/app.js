const express = require("express");
const app = express();

app.listen(3000);

// register view engine

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const blogs = [
    { title: "Learn Html", snippet: "Hyber text markup language" },
    { title: "Learn CSS", snippet: "Cascadin Style Sheet " },
  ];
  res.render("index", { title: "eltayeb", blogs: blogs });
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
