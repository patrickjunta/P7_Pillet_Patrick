const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    db.query(
      "INSERT INTO users SET ?",
      user,
      function (error, results, fields) {
        if (error) {
          console.log(error);
          return res.status(400).json({ error });
        } else {
          return res.status(201).json({ message: "Utilisateur créé !" });
        }
      }
    );
  });
};
/*
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    */
//.catch((error) => res.status(500).json({ error }));

exports.login = (req, res, next) => {
  const reqUser = req.body.username;
  const reqPass = req.body.password;

  if (reqUser && reqPass) {
    db.query(
      "SELECT * FROM db.users WHERE username= ?",
      reqUser,
      function (error, results, fields) {
        bcrypt.compare(req.body.password, user.password).then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ error: "Utilisateur ou Mot de passe incorrect !" });
          } else {
            res.status(200).json({
              userId: user._id,
              token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
                expiresIn: "24h",
              }),
            });
          }
        });
      }
    );
  }
};
