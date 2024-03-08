const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const goalSchema = require("./Goal");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    goals: [goalSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("goalCount").get(function () {
  return this.goals.length;
});

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
