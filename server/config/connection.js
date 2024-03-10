const { connect, connection } = require("mongoose");

const mongoURL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/octowaddle";
connect(mongoURL);

module.exports = connection;
