const { Schema, default: mongoose } = require("mongoose");

const cartSchema = new Schema({
  productId: {
    required: true,
    type: Number,
    unique: true,
  },

  name: {
    required: true,
    type: String,
  },

  images: {
    required: true,
    type: Array,
  },

  shortDescription: {
    required: true,
    type: String,
  },

  longDescription: {
    required: true,
    type: String,
  },

  regularPrice: {
    required: true,
    type: Number,
  },

  discountPrice: {
    required: true,
    type: Number,
  },

  category: {
    required: true,
    type: String,
  },

  brand: {
    required: true,
    type: String,
  },

  tags: {
    required: true,
    type: Array,
  },

  availability: {
    required: true,
    type: String,
  },

  averageRating: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

export const cartModel =
  mongoose.models.carts || mongoose.model("carts", cartSchema);
