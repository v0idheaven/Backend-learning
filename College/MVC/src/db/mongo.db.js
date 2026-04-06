import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error(err);
  }
};