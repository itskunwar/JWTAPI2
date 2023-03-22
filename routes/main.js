const express = require("express");
const { login, dashboard } = require("../controllers/main");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/login", login);
router.get("/dashboard", auth, dashboard);

module.exports = router;
