const mongoURI = process.env.MONGO_URI;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClienSecret = process.env.GOOGLE_CLIENT_SECRET;
const nextAuthSecret = process.env.NEXTAUTH_SECRET;
const fbClientId = process.env.FB_CLIENT_ID;
const fbClientSecret = process.env.FB_SECRET_ID;

export {
  fbClientId,
  fbClientSecret,
  googleClienSecret,
  googleClientId,
  mongoURI,
  nextAuthSecret,
};
