const router = require("express").Router();

const Controllers = require("../controllers/admin");

router.get("/", Controllers.greetAdmin);

module.exports = router;
