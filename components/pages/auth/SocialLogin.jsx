'use client';

import { signIn } from 'next-auth/react';

const SocialLogin = () => {
  const handleClick = (e, provider) => {
    signIn(provider, { callbackUrl: 'http://localhost:3000/checkout' });
  };

  return (
    <div className="mt-4 flex gap-4">
      <button
        href="#"
        className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
      >
        facebook
      </button>
      <button
        onClick={() => handleClick('google')}
        className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
      >
        google
      </button>
    </div>
  );
};

export default SocialLogin;
