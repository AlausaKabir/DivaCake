const User = require("../models/User");
const CryptoJs = require("crypto-js");
const { PASS_SEC, JWTSecret, ADMINS } = require("../config/keys");
const jwt = require("jsonwebtoken");

const { errorResponse, successResponse } = require("../helpers/responses");

const userRegistration = async (req, res) => {
  const user = await User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  });
  if (user) return errorResponse(res, 400, "Email or username already exist");
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(req.body.password, PASS_SEC).toString(),
    name: req.body.name,
  });
  try {
    const savedUser = await newUser.save();

    return successResponse(res, 201, "User successfully register", savedUser);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return errorResponse(res, 401, err.message);
    console.log(user, "User");
    const hashedPassword = CryptoJs.AES.decrypt(user.password, PASS_SEC);

    const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

    if (originalPassword !== req.body.password)
      return res.status(401).json("Wrong Password");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      JWTSecret,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { userRegistration, userLogin };
