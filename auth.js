import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import client from './lib/client';
import {
  fbClientId,
  fbClientSecret,
  googleClienSecret,
  googleClientId,
  nextAuthSecret,
} from './service/secret';

const authOptions = {
  adapter: MongoDBAdapter(client),
  session: {
    strategy: 'jwt',
  },
  providers: [
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
