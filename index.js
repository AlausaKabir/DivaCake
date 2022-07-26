const database = require("./config/mongoDB");
const server = require("./routes");

const port = 4000;

database()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err.message));

server.listen(port, () =>
  console.log(`Application is up and running on Port ${port}`)
);
