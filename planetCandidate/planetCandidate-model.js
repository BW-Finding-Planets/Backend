const db = require("../data/db-config.js");

module.exports = {
  getStarsById,
  getStats,
  veryLikely,
  someWhatLikely,
  neutralLikely,
  someWhatUnLikely,
  veryUnLikely
};

function getStarsById(id) {
  return db("stars")
    .where({ id })
    .first();
}

function getStats() {
  return db("stars").select(
    "id",
    "veryLikely",
    "someWhatLikely",
    "neutralLikely",
    "someWhatUnLikely",
    "veryUnLikely"
  );
}

// function getLikely(id) {
//   return db("stars")
//     .select("veryLikely")
//     .where({ id })
//     .first();
// }

async function veryLikely(id, count) {
  let newCount = await db("stars")
    .select("veryLikely")
    .where({ id })
    .first();

  return db("stars")
    .select("veryLikely")
    .where({ id })
    .update({
      veryLikely: newCount.veryLikely + parseInt(count.veryLikely, 10)
    });
}

async function someWhatLikely(id, count) {
  let newCount = await db("stars")
    .select("someWhatLikely")
    .where({ id })
    .first();

  return db("stars")
    .select("someWhatLikely")
    .where({ id })
    .update({
      someWhatLikely:
        newCount.someWhatLikely + parseInt(count.someWhatLikely, 10)
    });
}

async function neutralLikely(id, count) {
  let newCount = await db("stars")
    .select("neutralLikely")
    .where({ id })
    .first();

  return db("stars")
    .select("neutralLikely")
    .where({ id })
    .update({
      neutralLikely: newCount.neutralLikely + parseInt(count.neutralLikely, 10)
    });
}

async function someWhatUnLikely(id, count) {
  let newCount = await db("stars")
    .select("someWhatUnLikely")
    .where({ id })
    .first();

  return db("stars")
    .select("someWhatUnLikely")
    .where({ id })
    .update({
      someWhatUnLikely:
        newCount.someWhatUnLikely + parseInt(count.someWhatUnLikely, 10)
    });
}

async function veryUnLikely(id, count) {
  let newCount = await db("stars")
    .select("veryUnLikely")
    .where({ id })
    .first();

  return db("stars")
    .select("veryUnLikely")
    .where({ id })
    .update({
      veryUnLikely: newCount.veryUnLikely + parseInt(count.veryUnLikely, 10)
    });
}
// function veryUnLikely() {
//   return db("stars")
//     .select("veryUnLikely")
//     .where({ id })
//     .update(count);
// }
