const User = require("../models/User");
const Order = require("../models/Order");
const { successResponse, errorResponse } = require("../helpers/responses");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../validations/verifyToken");

const users = async (req, res, next) => {
  const user = await User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  });
  if (user) return successResponse(res, `Welcome ${username}`, user, User());
  next();
};

const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    return successResponse(res, 200, "Order Saved", savedOrder);
  } catch (err) {
    return errorResponse(res, 500, err.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return successResponse(res, 200, "Order Updated", updatedOrder);
  } catch (err) {
    return errorResponse(res, 500, err.message);
  }
};

module.exports = { users, createOrder, updateOrder };
