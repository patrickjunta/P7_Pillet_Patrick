const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const path = require("path");
const cors = require('cors');
const helmet = require("helmet");
app.use(cors());
app.use(helmet());
require("dotenv").config();

app.use(bodyParser.json());

app.use("/api/auth", userRoutes);
app.use("/api/post", postRoutes);

module.exports = app;