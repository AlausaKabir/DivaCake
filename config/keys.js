require("dotenv").config();

module.exports = {
  MongoDB: process.env.MONGO_DB_URL,
  PORT: process.env.PORT,
  PASS_SEC: process.env.PASS_SEC,
  JWTSecret: process.env.JWT_Secret,
  ADMINS: process.env.Admins_Info,
};
