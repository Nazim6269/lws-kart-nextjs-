import { productModel } from '@/models/productModel';

const getAllProducts = async () => {
  const data = await productModel.find().lean();

  return data;
};

export { getAllProducts };
