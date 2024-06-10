const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const totalCount = await Product.countDocuments()
    const products = await Product.find({}).populate({ path: 'categories', select: '_id name' });
    res.json({
      success: true,
      data: products,
      totalCount,
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
