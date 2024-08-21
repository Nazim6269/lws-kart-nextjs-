import { newArrivalModel } from '@/models/newArrivalModel';
import { productModel } from '@/models/productModel';

const getAllProducts = async () => {
  const data = await productModel.find().lean();

  return data;
};

const getProductById = async (id) => {
  const data = await productModel.findOne({ productId: id }).lean();

  return data;
};

const getProductsByCategory = async (category) => {
  const data = await productModel.find({ category: category }).lean();

  return data;
};

const getNewArrivalProducts = async () => {
  const newArrivalData = await newArrivalModel.find().lean();

  return newArrivalData;
};

export {
  getAllProducts,
  getNewArrivalProducts,
  getProductById,
  getProductsByCategory,
};
