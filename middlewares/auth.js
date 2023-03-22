require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    const error = new Error("Missing Token!");
    error.statusCode = 401;
    next(error);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const { username, id } = decodedToken;
    req.user = { username, id };
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = auth;
