const mongoose = require("mongoose");
const express = require("express");
// const Product = require("./product");
const { dbConnect } = require("./config");
const multer = require("multer");
const app = express();
app.use(express.json());
require("dotenv").config();

dbConnect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, resp) => {
  resp.send("file uploaded");
});
