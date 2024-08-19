import mongoose, { Schema } from 'mongoose';

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
    type: Aray,
  },
  ratingList: {
    required: false,
    type: Aray,
  },
  orderedHistory: {
    required: false,
    type: Aray,
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model('users', userSchema);
