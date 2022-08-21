const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const app = express();

const dbURI =
  "mongodb+srv://root:root@nodetuts.wxucvy8.mongodb.net/nodeTuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((params) => {
    console.log("connected to db");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

// register view engine

app.set("view engine", "ejs");

//middleware and static files

app.use(express.static("public"));

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("request made");
  next();
});

// mongoose routes

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
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
