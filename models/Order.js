const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    CustomerName: { type: String, required: true, unique: true },
    CakeType: [
      {
        CakeId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: {
      type: Number,
      require: true,
    },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
    messageOnCake: { type: String, min: 5, max: 30 },
    RepicientPhoneNo: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
