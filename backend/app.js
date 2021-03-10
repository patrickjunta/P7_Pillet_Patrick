const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const path = require("path");

// packages sécurité
const cors = require('cors');
const helmet = require("helmet");
app.use(cors());
app.use(helmet());
require("dotenv").config();

//CORS
/*
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
*/

app.use(bodyParser.json());

app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

module.exports = app;