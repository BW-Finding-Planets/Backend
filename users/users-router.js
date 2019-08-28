const router = require("express").Router();

const users = require("./users-model.js");

router.get("/", (req, res) => {
  users
    .getUsers()
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.get("/:id", validateUserId, (req, res) => {
  res.status(200).json(req.user);
});

router.put("/:id", validateUserId, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  users
    .updateUser(id, changes)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

router.delete("/:id", validateUserId, (req, res) => {
  users
    .remove(req.params.id)
    .then(user => {
      res.status(200).json({ message: "User deleted" });
    })
    .catch(err => {
      status(500).json({ error: "Internal server error" });
    });
});

function validateUserId(req, res, next) {
  const { id } = req.params;
  users
    .getUsersById(id)
    .then(user => {
      // console.log(user);
      if (user) {
        req.user = user;
        next();
      } else {
        res
          .status(404)
          .json({ error: "error in retrieving data validatUserId" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Internal server error: validatUserId" });
    });
}

module.exports = router;
