const knex = require("knex");

const config = require("../knexfile.js");

const dbEnv = process.env.DB_ENV || "develppment";

module.exports = knex(config.development[dbEnv]);
