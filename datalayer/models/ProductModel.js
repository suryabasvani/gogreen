const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    cost: {
      type: "Number",
    },
    mrate: {
      type: "Number",
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
