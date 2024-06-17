const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controller");

router.get("/all", getAllProducts);
router.post("/", addProduct);

router
  .route("/:productId")
  .get(getProductById)
  .put(updateProductById)
  .delete(deleteProductById);

module.exports = router;
