'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SocialLogin = () => {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (provider) => {
    try {
      const res = await signIn(provider, {
        callbackUrl: 'http://localhost:3000/checkout',
        redirect: false,
      });

      if (res?.error === 'OAuthAccountNotLinked') {
        setError(
          'This email is associated with a different login method. Please sign in with the original method.',
        );
      } else if (res?.url) {
        router.push(res.url);
      }
    } catch (error) {
      console.error('Error during signIn:', error);
    }
  };

  return (
    <div className="flex gap-4">
      {error && <p className="text-red-600">{error}</p>}
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
