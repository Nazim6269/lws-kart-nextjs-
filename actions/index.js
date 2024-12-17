"use server";

import { signIn } from "@/auth";

// import { signIn } from '@/auth';

// export const googleSignIn = async () => {
//   await signIn('google', { callbackUrl: 'http://localhost:3000/checkout' });
// };

// export const facebookSignIn = async () => {
//   await signIn('facebook', { callbackUrl: 'http://localhost:3000/checkout' });
// };

export const loginAction = async (formData) => {
  try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    };
    const res = await signIn("credentials", loginData);

    return res;
  } catch (error) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};
