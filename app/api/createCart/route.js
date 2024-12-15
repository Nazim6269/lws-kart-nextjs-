import { auth } from "@/auth";
import { addToCart } from "@/database/queries/userQuery";

export async function POST(req) {
  try {
    const session = await auth();
    const { productId } = await req.json();

    if (!session?.user?.email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "user not authenticated,Please register or login firs",
        }),
        { status: 401 }
      );
    }
    await addToCart(session?.user?.email, productId);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Item added to cart Successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Failed to add cart",
      }),
      { status: 500 }
    );
  }
}
