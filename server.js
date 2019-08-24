const express = require("express");
const cors = require("cors");

//routers

const server = express();
server.use(express.json());
server.use(cors());

//server.use(routers)

server.get("/", (req, res) => {
  res.send("Server.js get route");
});

module.exports = server;
