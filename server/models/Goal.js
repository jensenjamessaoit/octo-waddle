const { Schema } = require("mongoose");

const goalSchema = new Schema({
  goal: {
    type: String,
  },
  status: {
    type: String,
  },
  todoList: [
    {
      type: String,
    },
  ],
});

module.exports = goalSchema;
