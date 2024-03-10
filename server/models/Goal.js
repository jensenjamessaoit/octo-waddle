const { Schema } = require("mongoose");

const todoSchema = require("./Todo");

const goalSchema = new Schema({
  goal: {
    type: String,
  },
  status: {
    type: String,
  },
  todoList: [],
});

module.exports = goalSchema;
