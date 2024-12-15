import { cartModel } from "@/models/cartModel";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cartItems = await cartModel.find();

    return NextResponse.json(cartItems);
  } catch (error) {
    // Return an error response if something goes wrong
    return NextResponse.json(
      { error: "Failed to fetch cart items" },
      { status: 500 }
    );
  }
}
