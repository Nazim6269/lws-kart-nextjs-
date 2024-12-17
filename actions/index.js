"use server";

import { signIn } from "@/auth";
import { findUserFromDB } from "@/database/queries/userQuery";
import { userModel } from "@/models/userModel";
import { redirect } from "next/navigation";

// import { signIn } from '@/auth';

// export const googleSignIn = async () => {
//   await signIn('google', { callbackUrl: 'http://localhost:3000/checkout' });
// };

// export const facebookSignIn = async () => {
//   await signIn('facebook', { callbackUrl: 'http://localhost:3000/checkout' });
// };

export const registerAction = async (formData) => {
  try {
    const registerData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const user = await findUserFromDB(registerData?.email);

    if (user) {
      throw new Error("User already exist with this credentials");
    }

    const newUser = await userModel.create({
      name: registerData.name,
      email: registerData.email,
      password: registerData.password,
    });

    const res = await newUser.save();

    if (!res) {
      return {
        success: false,
        message: "Failed to Register, Please try again later",
      };
    }
    return { success: true, message: "User registered successfully" };
  } catch (error) {
    return { success: false, message: error.message || "Something went wrong" };
  }
};

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
