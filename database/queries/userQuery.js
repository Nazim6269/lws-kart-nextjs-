import { userModel } from "@/models/userModel";

const addToCart = async (userEmail, productId) => {
  try {
    let user = await userModel.findOne({ email: "test1@gmail.com" });

    if (user) {
      let existingProduct = user.cartList.find((item) => {
        return item.productId === productId;
      });

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        user.cartList.push({ productId, quantity: 1 });
      }

      await user.save();
      return "Cart updated successfully";
    } else {
      return "user not found";
    }
  } catch (error) {
    console.log(error);
  }
};

export { addToCart };
