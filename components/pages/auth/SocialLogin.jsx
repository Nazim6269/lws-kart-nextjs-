'use client';

import { signIn } from 'next-auth/react';

const SocialLogin = () => {
  const handleSubmit = async (provider) => {
    await signIn(provider, { callbackUrl: 'http://localhost:3000' });
  };

  return (
    <div className="mt-4 flex gap-4">
      <button
        type="button"
        onClick={() => handleSubmit('facebook')}
        className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
      >
        Facebook
      </button>
      <button
        type="button"
        onClick={() => handleSubmit('google')}
        className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
      >
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
