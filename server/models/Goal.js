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

goalSchema.virtual("taskCount").get(function () {
  return this.todoList.length;
});

module.exports = goalSchema;
