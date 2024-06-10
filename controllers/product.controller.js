const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({
      success: true,
      data: products,
      message: "all products fetch successfully...",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      ...req.body,
    })
    await newProduct.save();
    res.json({
      success: true,
      data: newProduct,
      message: "products created successfully...",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getAllProducts,
  addProduct
}
