import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connInst = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DBname}`
    );
    console.log(`MongoDB Connected \nDB Host:${connInst.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Failed at db.js : ", error);
    process.exit(1);
  }
};

export default connectDB;
