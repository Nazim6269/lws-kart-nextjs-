import { newArrivalModel } from "@/models/newArrivalModel";
import { productModel } from "@/models/productModel";

const getAllProducts = async (limit, page) => {
  const skip = (page - 1) * limit;

  const data = await productModel
    .find()
    .skip(skip ?? 0)
    .limit(limit ?? 0)
    .lean();

  // Convert _id field and any other special fields to plain values (stringified)
  const plainData = data.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return plainData;
};

const getProductById = async (id) => {
  const data = await productModel.findOne({ productId: Number(id) }).lean();

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
