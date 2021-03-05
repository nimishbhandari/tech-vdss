const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const keys = require("../config/keys");
const passport = require("passport");

// Load input validation
const validateLoginInput = require("../validation/login");

// Load User model
const User = require("../models/User");

router.post("/loginAuth", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email })
    .then((user) => {
      // Check if user exists
      if (!user) {
        return res.status(401).json({ emailnotfound: "Email not found" });
      }

      // Check password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          return res.status(200).json({
            passwordincorrect: "Login",
          });
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    })
    .catch((err) => {
      return res.status(400);
    });
});

router.post("/updatePassword", (req, res) => {
  
  const old = req.body.oldPass;

  User.find({email : req.body.email}).exec((err, user) => {
    if (err || !user) {
      return res.status(500).json({
        message: "No user!",
      });
    }

    bcrypt.compare(old, user[0].password).then((isMatch) => {
      if (isMatch) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.newPass, salt, (err, hash) => {
            if (err) throw err;
            user[0].password = hash;
            user[0]
              .save()
              .then((user) => {
                res.status(200).json({ done: 1 });
              })
              .catch(() => {
                return res.status(400).json({
                  done: 2,
                });
              });
          });
        });
      } else {
        return res.status(200).json({
          done: 0,
        });
      }
    });
  });
});

module.exports = router;
