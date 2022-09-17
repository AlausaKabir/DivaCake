const router = require("express").Router();
const { userRegistration, userLogin } = require("../controllers/User");
const { users, createOrder, updateOrder } = require("../controllers/order");

router.post("/register", userRegistration);
router.post("/login", userLogin);
router.post("/order", users, createOrder);
router.put("/order-update", users, updateOrder);
module.exports = router;
