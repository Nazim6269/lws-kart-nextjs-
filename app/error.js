'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">Settings Error</h1>
      <p className="mt-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
