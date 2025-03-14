import { mongoURI } from "@/service/secret";
import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }
    await mongoose.connect(mongoURI);

    mongoose.connection.on("connected", () => {
      console.log("DB is connected successfully");
    });

    mongoose.connection.on("disconnected", () => {
      console.log("DB disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("DB reconnected");
    });

    mongoose.connection.on("error", (error) => {
      console.error("DB connection error", error);
    });

    process.on("SIGINT", async () => {
      await mongoose.disconnect();
      console.log("DB disconnected due to application termination");
      process.exit(0);
    });

    process.on("SIGTERM", async () => {
      await mongoose.disconnect();
      console.log("DB disconnected due to application termination");
      process.exit(0);
    });
  } catch (error) {
    console.error("DB connection error:", error.message);
  }
};

export { connectMongo };
