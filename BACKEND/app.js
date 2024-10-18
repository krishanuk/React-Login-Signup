const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoutes");

const app = express();

//middle ware

app.use("/users", router);

mongoose
  .connect("mongodb+srv://admin:vhzRRhtsfQ35qrjR@cluster0.iim7c.mongodb.net/")
  .then(() => console.log("Connect to mongoDB"))
  .then(() => {
    app.listen(5000);
  })

  .catch((err) => console.log(err));
