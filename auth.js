import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {
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
  ],
  secret: nextAuthSecret,
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth(authOptions);
