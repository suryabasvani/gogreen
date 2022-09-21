const express = require("express");
const router = express.Router();

const ProductCtroler = require("../controllers/ProductCtrl");
const upload = require("../middleware/uploads");

//GET products/list
router.get("/list", ProductCtroler.getProducts);

//POST products/product
router.post("/product", ProductCtroler.getProduct);

//POST products/create
router.post("/create", upload.single("avatar"), ProductCtroler.addProduct);

router.post("/update", ProductCtroler.updatProduct);

router.post("/delete", ProductCtroler.delProduct);

module.exports = router;
