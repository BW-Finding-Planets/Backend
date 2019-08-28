const router = require("express").Router();

const users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

// router.get("/", restricted, (req, res) => {
router.get("/", (req, res) => {
  users
    .getUsers()
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  // console.log(changes);
  users
    .update(id, changes)
    .then(update => {
      console.log(update);
      res.status(200).json(update);
    })
    .catch(err => {
      res.status(500).json({ error: "Internal server error" });
    });
});

// function validateUserId(req, res, next) {
//   const { id } = req.params;
//   users
//     .findById(id)
//     .then(user => {
//       // console.log(user);
//       if (user) {
//         req.user = user;
//         next();
//       } else {
//         res
//           .status(404)
//           .json({ error: "error in retrieving data validatUserId" });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ error: "Internal server error: validatUserId" });
//     });
// }

module.exports = router;
