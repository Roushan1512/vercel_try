import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

export const Item = mongoose.model("itemdetails", itemSchema);
