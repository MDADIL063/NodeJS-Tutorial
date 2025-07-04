const mongoose = require("mongoose");
const express = require("express");
const Product = require("./product");
const { dbConnect } = require("./config");
const app = express();
app.use(express.json());
require("dotenv").config();

dbConnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
app.get("/search/:key", async (req, resp) => {
  let data = await Product.find({
    $or: [{ name: { $regex: req.params.key } }, { brand: { $regex: req.params.key } }],
  });
  console.log(req.params);
  resp.send(data);
});
