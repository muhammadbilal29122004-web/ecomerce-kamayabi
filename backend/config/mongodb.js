import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const baseUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
    const dbUri = baseUri.endsWith("/trendify") ? baseUri : `${baseUri}/trendify`;

    if (mongoose.connection.readyState === 1) return true;

    await mongoose.connect(dbUri);
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    return false;
  }
};

export default connectDB;
