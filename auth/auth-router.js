const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwToken = require("jsonwebtoken");

const users = require("../users/users-model.js");
const secrets = require("../config/secrets.js");

router.post("register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  users
    .add(user)
    .then(hashed => {
      res.status(201).json(hashed);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  users
    .findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getWebToken(user);

        res.status(200).json({
          message: `Welcome to Planets Finder ${user.username}! `,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

function getWebToken(user) {
  const payload = {
    subject: users.id,
    username: user.username
  };
  const options = {
    expiresIn: "3d"
  };
  return jwToken.sign(payload, secrets.jsonWebTokenSecret, options);
}

module.exports = router;
