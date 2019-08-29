exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
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
    })
    .createTable("stars", stars => {
      stars.increments();

      stars.integer("ticid_x");
      stars.decimal("starTeffKelvin");
      stars.string("sector", 255);
      stars.decimal("magnitude");
      stars.string("luminosity", 255);
      stars.decimal("distance");
      stars.decimal("star_mass");
      stars.decimal("star_radius");
      stars.string("constellation", 255);
      stars.decimal("rightascension");
      stars.decimal("declination");
      stars.decimal("predictions");
      stars.integer("veryLikely");
      stars.integer("someWhatLikely");
      stars.integer("neutralLikely");
      stars.integer("someWhatUnLikely");
      stars.integer("veryUnLikely");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("stars").dropTableIfExists("users");
};
