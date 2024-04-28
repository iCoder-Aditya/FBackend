import mongoose from "mongoose";
import { DbName } from "../constants.js";

export const connectDb = async () => {
  try {
    const conncetionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DbName})`
    );
    console.log(
      "db connections start with host",
      conncetionInstance.connection.host
    );
  } catch (error) {
    console.log("Error!", error);
    process.exit(1);
  }
};
