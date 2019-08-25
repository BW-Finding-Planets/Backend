const express = require("express");
const cors = require("cors");

const authRouter = require("./auth/auth-router.js");
const usersRouter = require("./users/users-router.js");

const server = express();
server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);
server.use("/users", usersRouter);

server.get("/", (req, res) => {
  res.send("Server.js get route");
});

module.exports = server;
