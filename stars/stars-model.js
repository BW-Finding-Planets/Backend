const db = require("../data/db-config.js");

module.exports = {
  getStars,
  getStarsById
};

function getStars() {
  return db("stars");
}

function getStarsById(id) {
  return db("stars")
    .where({ id })
    .first();
}
