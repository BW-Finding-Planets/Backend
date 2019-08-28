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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  stars
    .getStarsById(id)
    .then(star => {
      res.status(200).json(star);
    })
    .catch(err => {
      res.status(500).json("Internal Server error");
    });
});

module.exports = router;
