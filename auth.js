import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { findUserFromDB } from "./database/queries/userQuery";
import client from "./lib/client";
import {
  fbClientId,
  fbClientSecret,
  googleClienSecret,
  googleClientId,
  nextAuthSecret,
} from "./service/secret";

const authOptions = {
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          if (!credentials.email || !credentials.password) {
            return null;
          }

          const user = await findUserFromDB(credentials.email);

          if (!user) {
            return null;
          } else {
            const isMatch = user.password === credentials.password;

            if (!isMatch) {
              throw new Error("User not found");
            }
            return user;
          }
        } catch (error) {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClienSecret,
    }),

    FacebookProvider({
      clientId: fbClientId,
      clientSecret: fbClientSecret,
    }),
  ],
  secret: nextAuthSecret,
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);
