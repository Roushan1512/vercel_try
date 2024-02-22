import { Item } from "../models/item.model.js";
import express from "express";

const router = express.Router();

router.get("/getallitems", async (req, res) => {
  try {
    const newitem = await Item.find({});
    console.log("DB.find Called");
    res.json(newitem);
  } catch (error) {
    console.log("Get all items error : ", error);
    res.status(500).send("Server Error");
  }
});

router.post("/additem", async (req, res) => {
  try {
    const name = req.body.name;
    const description = req.body.description;
    const data = { name, description };
    const newitem = await Item.create(data);
    return res.status(201).send(newitem);
  } catch (e) {
    console.log("Post error : ", e);
    return res.status(500).send("Server Error");
  }
});

export default router;
