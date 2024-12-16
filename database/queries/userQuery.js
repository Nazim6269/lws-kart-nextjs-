import { userModel } from "@/models/userModel";

const addToCart = async (user, productId) => {
  try {
    let findUser = await userModel.findOne({ email: user?.email });

    if (findUser) {
      let existingProduct = findUser.cartList.find((item) => {
        return item.productId === productId.toString();
      });

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        findUser.cartList.push({ productId, quantity: 1 });
      }

      await findUser.save();
      return "Cart updated successfully";
    } else {
      const newUser = new userModel({
        name: user?.name,
        email: user?.email,
        password: user?.email,
        cartList: [{ productId: productId, quantity: 1 }],
      });

      await newUser.save();
      return "New user created and cart initialized successfully";
    }
  } catch (error) {
    console.log(error);
  }
};

export { addToCart };
