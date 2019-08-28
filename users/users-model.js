const db = require("../data/db-config.js");

module.exports = {
  add,
  getUsers,
  findBy,
  getUsersById,
  update,
  remove
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

function getUsersById(id) {
  return db("users")
    .where({ id })
    .first();
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return getUsersById(id);
    });
}

function update(id, user) {
  db("users")
    .where({ id })
    .update(user);

  return getUsersById(id);
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}
