const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/UserRoutes");

const app = express();

//middle ware

app.use("/users", router);

mongoose
  .connect("mongodb+srv://")
  .then(() => console.log("Connect to mongoDB"))
  .then(() => {
    app.listen(5000);
  })

  .catch((err) => console.log(err));
