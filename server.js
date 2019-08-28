const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");
const starsRouter = require("./stars/stars-router.js");
const restricted = require("./auth/restricted-middleware.js");

const server = express();
server.use(bodyParser.json());
server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);
server.use("/users", restricted, usersRouter);
server.use("/stars", restricted, starsRouter);

server.get("/", (req, res) => {
  res.send("Server.js get route");
});

module.exports = server;
