const mongoURI = process.env.MONGO_URI;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClienSecret = process.env.GOOGLE_CLIENT_SECRET;
const nextAuthSecret = process.env.NEXTAUTH_SECRET;
const fbClientId = process.env.FB_CLIENT_ID;
const fbClientSecret = process.env.FB_CLIENT_SECRET;
const nodeEnvSecret = process.env.NODE_ENV;

export {
  fbClientId,
  fbClientSecret,
  googleClienSecret,
  googleClientId,
  mongoURI,
  nextAuthSecret,
  nodeEnvSecret,
};
