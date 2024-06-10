const express = require('express');
const { getAllCategories, addCategory } = require('../controllers/category.controller');

const router = express.Router();

router.get('/all', getAllCategories);
router.post('/', addCategory);

module.exports = router;
