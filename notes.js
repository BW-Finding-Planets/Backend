[
  // {
  //     tceid: transit crossing event id, multiple ids for this feild,
  //     ticid: test input catalog id, unique id,
  //     planetNumber: 1,
  //     planetCandidateCount: 1,
  //     starTeffKelvin: 5730,
  //     starLoggCgs: 2.85571,
  //     orbitalPeriodDays: 0.23298,
  //     orbitalPeriodDays_err: 0.000021,
  //     planetRadiusEarthRadii: 5.35009,
  //     planetRadiusEarthRadii_err: 3.75701,
  //     ratioPlanetRadiusToStarRadius: 0.00769582,
  //     ratioSemiMajorAxisToStarRadius: 3.49829,
  //     semiMajorAxisAu: 0,
  //     starRadiusSolarRadii: 6.36801,
  //     transitDepthPpm: 65.3736,
  //     transitDepthPpm_err: 14.2985,
  //     transitDurationHours: 0.454673,
  //     transitEpochBtjd: 1543.31,
  //     transitEpochBtjd_err: 0.00104311,
  //     transitIngressTimeHours: 0.00471809,
  //     minImpactParameter: 0.5,
  //     ws_mes: 6.75431,
  //     ws_mesphase: 0.15489,
  //     expectedtransitcount: 225,
  //     chiSquare2: 179.197,
  //     mes: 7.40297,
  //     maxses: 3.38228,
  //     equilibriumTempKelvin: 0,
  //     InsolationFlux: 0,
  // },
  {
    tceid: "00101950374-01",
    ticid: 101950374,
    planetNumber: 1,
    planetCandidateCount: 1,
    starTeffKelvin: 5730,
    starLoggCgs: 2.85571,
    orbitalPeriodDays: 0.23298,
    orbitalPeriodDays_err: 0.000021,
    planetRadiusEarthRadii: 5.35009,
    planetRadiusEarthRadii_err: 3.75701,
    ratioPlanetRadiusToStarRadius: 0.00769582,
    ratioSemiMajorAxisToStarRadius: 3.49829,
    semiMajorAxisAu: 0,
    starRadiusSolarRadii: 6.36801,
    transitDepthPpm: 65.3736,
    transitDepthPpm_err: 14.2985,
    transitDurationHours: 0.454673,
    transitEpochBtjd: 1543.31,
    transitEpochBtjd_err: 0.00104311,
    transitIngressTimeHours: 0.00471809,
    minImpactParameter: 0.5,
    ws_mes: 6.75431,
    ws_mesphase: 0.15489,
    expectedtransitcount: 225,
    chiSquare2: 179.197,
    mes: 7.40297,
    maxses: 3.38228,
    equilibriumTempKelvin: 0,
    InsolationFlux: 0
  },
  {
    tceid: "00101955023-01",
    ticid: 101955023,
    planetNumber: 1,
    planetCandidateCount: 1,
    starTeffKelvin: 3202,
    starLoggCgs: 4.86375,
    orbitalPeriodDays: 1.62887,
    orbitalPeriodDays_err: 0.0000372,
    planetRadiusEarthRadii: 1.35716,
    planetRadiusEarthRadii_err: 0.64987,
    ratioPlanetRadiusToStarRadius: 0.0478141,
    ratioSemiMajorAxisToStarRadius: 16.5309,
    semiMajorAxisAu: 0.0153101,
    starRadiusSolarRadii: 0.26,
    transitDepthPpm: 2693.31,
    transitDepthPpm_err: 133.34,
    transitDurationHours: 0.789212,
    transitEpochBtjd: 1544.71,
    transitEpochBtjd_err: 0.000595012,
    transitIngressTimeHours: 0.0360612,
    minImpactParameter: 0.0129516,
    ws_mes: 2.69287,
    ws_mesphase: 0.7512,
    expectedtransitcount: 32,
    chiSquare2: 45.6226,
    mes: 20.7561,
    maxses: 6.81695,
    equilibriumTempKelvin: 582.251,
    InsolationFlux: 27.1621
  },
  {
    tceid: "00102764828-01",
    ticid: 102764828,
    planetNumber: 1,
    planetCandidateCount: 1,
    starTeffKelvin: 3285,
    starLoggCgs: 4.97522,
    orbitalPeriodDays: 0.673362,
    orbitalPeriodDays_err: 0.0000445,
    planetRadiusEarthRadii: 2.80852,
    planetRadiusEarthRadii_err: 0.500444,
    ratioPlanetRadiusToStarRadius: 0.09254,
    ratioSemiMajorAxisToStarRadius: 1.43348,
    semiMajorAxisAu: 0.00967738,
    starRadiusSolarRadii: 0.278,
    transitDepthPpm: 7367.13,
    transitDepthPpm_err: 293.515,
    transitDurationHours: 3.04057,
    transitEpochBtjd: 1543.85,
    transitEpochBtjd_err: 0.00203143,
    transitIngressTimeHours: 1.21305,
    minImpactParameter: 0.897633,
    ws_mes: 7.57127,
    ws_mesphase: 0.3358,
    expectedtransitcount: 79,
    chiSquare2: 51.2853,
    mes: 14.1846,
    maxses: 3.63854,
    equilibriumTempKelvin: 776.91,
    InsolationFlux: 86.1002
  }
];

// return knex.schema.createTable("stars", stars => {
//   stars.increments()

//   stars
//     .string('tceid',255)
//   stars
//     .string('ticid', 255)
//     .unique()
//   stars
//     .integer('planetNumber')
//   stars
//     .integer('planetCandidateCount')
//   stars
//     .integer('starTeffKelvin')
//     stars
//       .decimal('starLoggCgs')
//   stars
//     .decimal('orbitalPeriodDays')
//   stars
//     .decimal('orbitalPeriodDays_err')
//   stars
//     .decimal('planetRadiusEarthRadii')
//   stars
//     .decimal('planetRadiusEarthRadii_err')
//   stars
//     .decimal('ratioPlanetRadiusToStarRadius')
//   stars
//     .decimal('ratioSemiMajorAxisToStarRadius')
//   stars
//     .decimal('semiMajorAxisAu')
//   stars
//     .decimal('starRadiusSolarRadii')
//   stars
//     .decimal('transitDepthPpm')
//   stars
//     .decimal('transitDepthPpm_err')
//   stars
//     .decimal('transitDurationHours')
//   stars
//     .decimal('transitEpochBtjd')
//   stars
//     .decimal('transitEpochBtjd_err')
//   stars
//     .decimal('transitIngressTimeHours')
//   stars
//     .decimal('minImpactParameter')
//   stars
//     .decimal('ws_mes')
//   stars
//     .decimal('ws_mesphase')
//   stars
//     .integer('expectedtransitcount')
//   stars
//     .decimal('chiSquare2')
//   stars
//     .decimal('mes')
//   stars
//     .decimal('maxses')
//   stars
//     .decimal('equilibriumTempKelvin')
//   stars
//     .decimal('InsolationFlux')
// })

//Community it is a planet count
stars
  .string("startUpvoteCount?")

  .createTable("lightCurve", lightCurve => {
    lightCurve.increments();
    lightCurve
      .integer("stars_Id")
      .unassigned()
      .notNullable()
      .references("id")
      .inTable("stars")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
lightCurve.integer("datapoints");

users.string("upvotedStar?");

{
      username: "user",
      password: "pass",
      email: "email@email.com",
      firstName: "John",
      lastName: "Doe",
      profession: "Planet Hunter"
    }

{
      tceid: "00139250626-01",
      ticid: 139250626,
      planetNumber: 1,
      planetCandidateCount: 1,
      starTeffKelvin: 3752,
      starLoggCgs: 4.438,
      orbitalPeriodDays: 31.3318,
      orbitalPeriodDays_err: 0.00267395,
      planetRadiusEarthRadii: 3.13843,
      planetRadiusEarthRadii_err: 1.1241,
      ratioPlanetRadiusToStarRadius: 0.0287481,
      ratioSemiMajorAxisToStarRadius: 65.7255,
      semiMajorAxisAu: 0.194601,
      starRadiusSolarRadii: 1,
      transitDepthPpm: 988.228,
      transitDepthPpm_err: 119.204,
      transitDurationHours: 3.7466,
      transitEpochBtjd: 1347.45,
      transitEpochBtjd_err: 0.00189868,
      transitIngressTimeHours: 0.104707,
      minImpactParameter: 0.00341183,
      ws_mes: 6.18694,
      ws_mesphase: 1.79583,
      expectedtransitcount: 2,
      chiSquare2: 4.2702,
      mes: 8.60686,
      maxses: 7.6734,
      equilibriumTempKelvin: 375.303,
      InsolationFlux: 4.68867,
      veryLikely: 0,
      someWhatLikely: 0,
      neutralLikely: 0,
      someWhatUnLikely: 0,
      veryUnLikely: 0
    }