const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

////routes declaration////////
const productRoutes = require("./routes/ProductRoutes");

const app = express();
let _db = "mongodb+srv://surya:12345@cluster0.vagobo1.mongodb.net/facilitydb";

//
app.use(bodyParser.json());

//use declared routes
app.use("/products", productRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));
//app.use("/images", express.static("images"));

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, GET, POST, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

//global error after routes declerations completed
// app.use((error, req, res, next) => {
//   console.log(error);
//   const status = error.statusCode || 500;
//   const message = error.message;
//   res.status(status).json({ message: message });
// });

//mongoose server
mongoose
  .connect(_db)
  .then((result) => {
    console.log("data base connected");
    app.listen(8080);
  })
  .catch((error) => console.log(error));
