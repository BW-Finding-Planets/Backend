const router = require("express").Router();

const planetCandidate = require("./planetCandidate-model.js");

router.get("/", (req, res) => {
  planetCandidate
    .getStats()
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});
// router.put("/:id/veryLikely")

module.exports = router;
