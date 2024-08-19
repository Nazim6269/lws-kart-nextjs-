import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  productId: {
    required: true,
    type: String,
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
  ratings: {
    required: false,
    type: Number,
  },
});

export const productModel =
  mongoose.models.products ?? mongoose.model('products', productSchema);
