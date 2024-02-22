import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import items from "./routes/item.route.js";

dotenv.config({
  path: "../.env",
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", items);

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    app.on("error", (error) => {
      console.log("Server start failed : ", error);
    });
  })
  .catch((error) => {
    console.log("MongoDB Error at index.js : ", error);
  });
