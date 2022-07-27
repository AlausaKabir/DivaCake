const { successResponse, errorResponse } = require("../helpers/responses");
const models = require("../models");

module.exports = {
  greetAdmin(req, res) {
    return successResponse(res, 200, "Hello Admin, Lets Get Started");
  },

  async allUser(req, res) {
    try {
      const fetchAllUser = await models.User.find();
      return successResponse(res, 200, "Successfully Fetch all Application", {
        users: fetchAllUser,
      });
    } catch (error) {
      return errorResponse(res, 500, "Internal Server Error");
    }
  },

  async getOrder(req, res) {
    try {
      const fetchAllOrder = await models.Order.find();
      return successResponse(res, 200, "Successfully Fetch all Application", {
        orders: fetchAllOrder,
      });
    } catch (error) {
      return errorResponse(res, 500, "Internal Server Error");
    }
  },
};
