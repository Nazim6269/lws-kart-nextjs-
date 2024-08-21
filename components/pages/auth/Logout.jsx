'use client';

import { signOut } from 'next-auth/react';

const Logout = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: 'http://localhost:3000/login' })}
      className="text-gray-200 hover:text-white transition mx-2"
    >
      Logout
    </button>
  );
};

export default Logout;
