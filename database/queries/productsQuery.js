import { cartModel } from "@/models/cartModel";
import { newArrivalModel } from "@/models/newArrivalModel";
import { productModel } from "@/models/productModel";
import { whishListModel } from "@/models/whishListModel";

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

// Function to create a new wishlist item
const createWhishList = async (product) => {
  try {
    return await whishListModel.create(product);
  } catch (error) {
    console.error("Error creating wishlist:", error);
    throw new Error("Could not create wishlist item");
  }
};

// Function to get all wishlist items
const getWhishList = async () => {
  try {
    return await whishListModel.find().lean();
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    throw new Error("Could not fetch wishlist items");
  }
};

// Function to create a new cartlist item
const createCartList = async (product) => {
  try {
    return await cartModel.create(product);
  } catch (error) {
    console.error("Error creating cartList:", error);
    throw new Error("Could not create cartList item");
  }
};

// Function to get all cartlist items
const getCartList = async () => {
  try {
    return await cartModel.find().lean();
  } catch (error) {
    console.error("Error fetching cartList:", error);
    throw new Error("Could not fetch cartlist items");
  }
};

export {
  createCartList,
  createWhishList,
  getAllProducts,
  getCartList,
  getNewArrivalProducts,
  getProductById,
  getProductsByCategory,
  getWhishList,
};
