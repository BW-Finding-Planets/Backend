exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();

    users
      .string("username", 50)
      .notNullable()
      .unique();
    users.string("password", 255).notNullable();
    users.string("email", 255).unique();
    users.string("firstName", 50);
    users.string("lastName", 50);
    users.string("profession", 50);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
