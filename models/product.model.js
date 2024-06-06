const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    price: {
      mrp: {
        type: Number,
        required: true,
      },
      sellingPrice: {
        type: Number,
        required: true,
      },
    },
    stock: {
      availableStock: {
        type: Number,
        required: false,
      },
      soldStock: {
        type: Number,
        required: false,
      },
    },
    status: {
      type: String,
      enum: ['show', 'hide'],
      default: 'show',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
