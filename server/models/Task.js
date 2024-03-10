const { Schema } = require("mongoose");

const taskSchema = new Schema({
  task: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = taskSchema;
