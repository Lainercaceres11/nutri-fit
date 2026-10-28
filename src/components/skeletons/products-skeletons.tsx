export default function ProductSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      <div className="relative h-48 w-full bg-gray-200"></div>

      <div className="p-4 flex flex-col grow">
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 mb-3"></div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
          <div className="h-5 w-14 bg-gray-200 rounded"></div>
          <div className="h-5 w-20 bg-gray-200 rounded"></div>
        </div>

        <div className="mt-auto">
          <div className="h-9 w-full bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
