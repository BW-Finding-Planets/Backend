const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  return knex("users").insert([
    {
      username: "user",
      password: bcrypt.hashSync("pass", 12),
      email: "email@email.com",
      firstName: "John",
      lastName: "Doe",
      profession: "Planet Hunter"
    }
  ]);
};
