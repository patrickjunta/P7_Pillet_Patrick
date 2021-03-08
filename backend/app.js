const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// const mongoose = require("mongoose");
const mysql = require('mysql');
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const path = require("path");
const helmet = require("helmet");
app.use(helmet());
require("dotenv").config();


//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database : "test_db"
});
db.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

app.use(bodyParser.json());

// app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

module.exports = app;