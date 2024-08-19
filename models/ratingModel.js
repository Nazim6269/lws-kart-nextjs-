import { Schema } from 'mongoose';

const ratingSchema = new Schema({
  productId: {
    required: false,
    type: String,
  },
  userIds: {
    requried: false,
    type: Array,
  },
  ratingAmount: {
    required: false,
    type: String,
  },
});

export const ratingModel =
  mongoose.models.ratings ?? mongoose.model('ratings', ratingSchema);
