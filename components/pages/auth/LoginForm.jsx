"use client";

import { loginAction } from "@/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      const res = await loginAction(formData);

      if (res?.error) {
        toast.error("Some thing went wrong");
      } else {
        toast.success("User Logged in Successfully");
        // window.location.href = "/checkout"; //It can be used instaed of router.push() & router.refresh(). which implement client side navigation and the refresh to change session

        router.push("/checkout");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="post" autoComplete="off">
        <div className="space-y-2">
          <div>
            <ToastContainer />
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="youremail.@domain.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="remember"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <Link href="#" className="text-primary">
            Forgot password?
          </Link>
        </div>
        <div className="mt-4">
          <button
            disabled={loading}
            type="submit"
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            Login
          </button>
        </div>
      </form>

      {/* <!-- login with --> */}
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
          Or login with
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>
      <SocialLogin />
      {/* <!-- ./login with --> */}

      <p className="mt-4 text-center text-gray-600">
        Don&apos;t have account?{" "}
        <Link href="/register" className="text-primary">
          Register now
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
