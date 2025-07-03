const mongoose = require("mongoose");
const express = require("express");
const product = require("./product");
const { dbConnect } = require("./config");
const app = express();
app.use(express.json());
require("dotenv").config();

dbConnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
app.post("/create", async (req, resp) => {
  let data = new product(req.body);
  let result = await data.save();

  resp.send(result);
});
app.get("/list", async (req, resp) => {
  let data = await product.find();

  resp.send(data);
});
app.delete("/delete/:_id", async (req, resp) => {
  let data = await product.deleteOne(req.params);

  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await product.updateOne(req.params, {
    $set: req.body,
  });
  console.log(req.body);
  resp.send(data);
});
