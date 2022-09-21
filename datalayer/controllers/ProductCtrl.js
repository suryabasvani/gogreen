const Product = require("../models/ProductModel");

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res
        .status(200)
        .json({ message: "Fetch all Products", products: products });
      console.log(products);
    })
    .catch((err) => {
      res.json({
        message: "An error occured",
      });
    });
};

exports.getProduct = (req, res, next) => {
  let productId = req.body.productId;
  Product.findById(productId)
    .then((product) => {
      res.status(200).json({ message: "find a product", product: product });
    })
    .catch((err) => {
      res.json({
        message: "Something went wrong",
      });
    });
};

exports.addProduct = (req, res, next) => {
  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    mrate: req.body.mrate,
  });
  if (req.file) {
    product.avatar = req.file.path.replace("\\", "/");
  }
  product
    .save()
    .then((response) => {
      res.status(201).json({
        message: "New product added!",
      });
    })
    .catch((err) => {
      res.json({
        message: "An errror accured",
      });
    });
};

exports.updatProduct = (req, res, next) => {
  let productId = req.body.productId;

  let updateData = {
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    mrate: req.body.mrate,
  };

  Product.findByIdAndUpdate(productId, { $set: updateData })
    .then((response) => {
      res.json({
        message: "update successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "something went wrong",
      });
    });
};

exports.delProduct = (req, res, next) => {
  let productId = req.body.productId;
  Product.findOneAndRemove(productId)
    .then((response) => {
      res.json({
        message: "Deleted successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "something went wrong",
      });
    });
};
