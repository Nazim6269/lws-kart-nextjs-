"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToCartBtn = ({ productId, whishList = false }) => {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/createCart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (res.ok) {
        toast.success("Product added to cart!");
      } else {
        toast.error("Failed to add product to cart.");
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {" "}
      <button
        onClick={handleAddToCart}
        className={`${
          whishList === false ? "w-full" : "px-2"
        } block  py-1 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition`}
        disabled={loading}
      >
        {loading ? "Adding..." : "Add to cart"}
      </button>
    </>
  );
};

export default AddToCartBtn;
