import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import {
  fbClientId,
  fbClientSecret,
  googleClienSecret,
  googleClientId,
  nextAuthSecret,
} from './service/secret';

const authOptions = {
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
