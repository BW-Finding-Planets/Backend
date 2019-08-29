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

router.put("/:id/veryLikely", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  planetCandidate
    .veryLikely(id, changes)
    .then(star => {
      res.status(200).json(star);
    })
    .catch(err => {
      res.status(500).json({ error: "Internal server error" });
    });
});

router.put("/:id/someWhatLikely", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  planetCandidate
    .veryLikely(id, changes)
    .then(star => {
      res.status(200).json(star);
    })
    .catch(err => {
      res.status(500).json({ error: "Internal server error" });
    });
});

router.put("/:id/neutralLikely", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  planetCandidate
    .veryLikely(id, changes)
    .then(star => {
      res.status(200).json(star);
    })
    .catch(err => {
      res.status(500).json({ error: "Internal server error" });
    });
});

router.put("/:id/someWhatUnLikely", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  planetCandidate
    .veryLikely(id, changes)

    .then(star => {
      res.status(200).json(star);
    })
    .catch(err => {
      res.status(500).json({ error: "Internal server error" });
    });
});

router.put("/:id/veryUnLikely", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  planetCandidate
    .veryLikely(id, changes)
    .then(star => {
      res.status(200).json(star);
    })
    .catch(err => {
      res.status(500).json({ error: "Internal server error" });
    });
});

module.exports = router;
