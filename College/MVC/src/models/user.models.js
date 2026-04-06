import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    age: Number,
    address: String,
  },
  {
    timestamps: true,
    toJSON: true,
  }
);

export const User = mongoose.model("User", userSchema);

