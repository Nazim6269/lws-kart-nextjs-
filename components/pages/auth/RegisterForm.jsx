"use client";

import { registerAction } from "@/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SocialLogin from "./SocialLogin";

const RegisterForm = () => {
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await registerAction(formData);

      if (res.success) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleRegister} method="post" autoComplete="off">
        <div className="space-y-2">
          <div>
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="fulan fulana"
            />
          </div>
          <div>
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
          {/* <div>
            <label htmlFor="confirm" className="text-gray-600 mb-2 block">
              Confirm password
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
              placeholder="*******"
            />
          </div> */}
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            />
            <label
              htmlFor="aggrement"
              className="text-gray-600 ml-3 cursor-pointer"
            >
              I have read and agree to the{" "}
              <a href="#" className="text-primary">
                terms & conditions
              </a>
            </label>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            create account
          </button>
        </div>
      </form>

      {/* <!-- login with --> */}
      <div className="mt-6 flex justify-center relative">
        <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
          Or signup with
        </div>
        <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
      </div>
      <SocialLogin />
      {/* <!-- ./login with --> */}

      <p className="mt-4 text-center text-gray-600">
        Already have account?{" "}
        <Link href="/login" className="text-primary">
          Login now
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
