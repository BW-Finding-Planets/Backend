const router = require("express").Router();
const stars = require("./stars-model.js");

router.get("/", (req, res) => {
  stars
    .getStars()
    .then(star => {
      res.json(star);
    })
    .catch(err => res.send(err));
});

module.exports = router;
