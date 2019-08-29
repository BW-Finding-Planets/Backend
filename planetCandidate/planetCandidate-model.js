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

function someWhatLikely() {
  return db("stars")
    .select("someWhatLikely")
    .where({ id })
    .update(count);
}

function neutral() {
  return db("stars")
    .select("neutralLikely")
    .where({ id })
    .update(count);
}

function someWhatUnLikely() {
  return db("stars")
    .select("someWhatUnLikely")
    .where({ id })
    .update(count);
}

function veryUnLikely() {
  return db("stars")
    .select("veryUnLikely")
    .where({ id })
    .update(count);
}
