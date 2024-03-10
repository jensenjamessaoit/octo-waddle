const { Schema } = require("mongoose");

const taskSchema = require("./Task");

const goalSchema = new Schema({
  goal: {
    type: String,
  },
  status: {
    type: String,
  },
  todoList: [taskSchema],
});

module.exports = goalSchema;
