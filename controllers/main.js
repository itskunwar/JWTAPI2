require("dotenv").config();
const jwt = require("jsonwebtoken");

const login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    const error = new Error("Email or password missing!");
    error.statusCode = 400;
    next(error);
  }
  const id = Math.floor(Math.random() * 100);
  const token = jwt.sign({ username, id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.status(201).json({ msg: "user created", token });
};

const dashboard = (req, res, next) => {
  const username = req.user.username;
  const id = req.user.id;
  res.status(200).json({
    msg: `Hello there @${username} with codi no ${id}`,
    secret: "Today is which day?",
  });
};

module.exports = { dashboard, login };
