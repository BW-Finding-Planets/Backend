const db = require("../data/db-config.js");

module.exports = {
  add,
  getUsers,
  findBy,
  findById,
  update
};

function getUsers() {
  return db("users");
}
// function find() {
//   return db("users").select("id", "username");
// }

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

async function update(id, user) {
  await db("users")
    .where({ id })
    .update(user);

  return findById(id);
}
