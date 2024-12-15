import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },

  whishList: {
    required: false,
    type: Array,
  },
  ratingList: {
    required: false,
    type: Array,
  },
  orderedHistory: {
    required: false,
    type: Array,
  },
  cartList: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

export const userModel =
  mongoose.models?.users ?? mongoose.model("users", userSchema);
