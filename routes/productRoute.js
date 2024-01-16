const express = require("express");
const { getAllProducts, createProduct, updateProduct, getProductDetails, deleteProduct } = require("../controller/productController");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct);
router.route("/product/:id").get(getProductDetails);

module.exports = router