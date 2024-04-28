import dotenv from "dotenv";
import { connectDb } from "./Db/Db.connection.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    console.log(`Database Connection Succesfull!!`);
    app.listen(process.env.PORT, () => {
      console.log(`server is listining to the port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database Connection Failed!!!", error);
  });
