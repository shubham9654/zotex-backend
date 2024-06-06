const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      lowercase: true,
      enum: ['show', 'hide'],
      default: 'show',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Description", descriptionSchema);
