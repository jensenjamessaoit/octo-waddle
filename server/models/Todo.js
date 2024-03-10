const { Schema } = require("mongoose");

const todoSchema = new Schema({
  task: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = todoSchema;
