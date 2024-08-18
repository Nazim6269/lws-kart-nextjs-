export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="spinner-border animate-spin border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
      <p className="mt-4">Loading...</p>
    </div>
  );
}
