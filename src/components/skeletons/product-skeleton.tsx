import ProductSkeleton from "./products-skeletons";

export default function ProductsSkeleton() {
  const skeletons = Array.from({ length: 18 });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="h-6 bg-gray-200 rounded w-80 mb-6 animate-pulse"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skeletons.map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
