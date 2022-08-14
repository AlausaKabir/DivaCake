const router = require("express").Router();
const { userRegistration, userLogin } = require("../controllers/User");

router.post("/register", userRegistration);
router.post("/login", userLogin);
module.exports = router;
