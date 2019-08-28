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

      stars.string("tceid", 255);
      stars.string("ticid", 255);
      stars.integer("planetNumber");
      stars.integer("planetCandidateCount");
      stars.integer("starTeffKelvin");
      stars.decimal("starLoggCgs");
      stars.decimal("orbitalPeriodDays");
      stars.decimal("orbitalPeriodDays_err");
      stars.decimal("planetRadiusEarthRadii");
      stars.decimal("planetRadiusEarthRadii_err");
      stars.decimal("ratioPlanetRadiusToStarRadius");
      stars.decimal("ratioSemiMajorAxisToStarRadius");
      stars.decimal("semiMajorAxisAu");
      stars.decimal("starRadiusSolarRadii");
      stars.decimal("transitDepthPpm");
      stars.decimal("transitDepthPpm_err");
      stars.decimal("transitDurationHours");
      stars.decimal("transitEpochBtjd");
      stars.decimal("transitEpochBtjd_err");
      stars.decimal("transitIngressTimeHours");
      stars.decimal("minImpactParameter");
      stars.decimal("ws_mes");
      stars.decimal("ws_mesphase");
      stars.integer("expectedtransitcount");
      stars.decimal("chiSquare2");
      stars.decimal("mes");
      stars.decimal("maxses");
      stars.decimal("equilibriumTempKelvin");
      stars.decimal("InsolationFlux");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("stars").dropTableIfExists("users");
};
