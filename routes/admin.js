const router = require("express").Router();

const Controllers = require("../controllers/admin");

router.get("/", Controllers.greetAdmin);

router.get("/get-all-users", Controllers.allUser);
router.get("/get-all-orders", Controllers.getAllOrder);

module.exports = router;
