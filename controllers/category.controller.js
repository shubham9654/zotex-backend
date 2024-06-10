const Category = require("../models/category.model");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json({
      success: true,
      data: categories,
      message: "all categories fetch successfully...",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

const addCategory = async (req, res) => {
  try {
    const newCategory = new Category({
      ...req.body,
    })
    await newCategory.save();
    res.json({
      success: true,
      data: newCategory,
      message: "categories created successfully...",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  getAllCategories,
  addCategory
}
