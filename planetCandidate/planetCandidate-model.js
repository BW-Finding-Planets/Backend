const db = require("../data/db-config.js");

module.exports = {
  getStats,
  veryLikely,
  someWhatLikely,
  neutral,
  someWhatUnLikely,
  veryUnLikely
};

function getStats() {
  return db("stars").select(
    "id",
    "veryLikely",
    "SomeWhatLikely",
    "Neutral",
    "SomeWhatUnLikely",
    "VeryUnLikely"
  );
}

function veryLikely(id, count) {
  return db("stars")
    .select("veryLikely")
    .where({ id })
    .update(count);
}

function someWhatLikely() {}

function neutral() {}

function someWhatUnLikely() {}

function veryUnLikely() {}
