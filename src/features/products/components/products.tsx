import type { Foods } from "../../../types/types";
import Product from "./product";
import ProductsSkeleton from "../../../components/ui/skeletons/product-skeleton";

type ProductsProps = {
  data: Foods;
  isLoading: boolean;
  onSelectedProduct?: (codes: string) => void;
  selectedCodes: string[];
};

export default function Products({
  data,
  isLoading,
  onSelectedProduct,
  selectedCodes,
}: ProductsProps) {
  if (isLoading) {
    return <ProductsSkeleton />;
  }

  if (!data || !data.products || data.products.length === 0) {
    return (
      <div className="max-w-7xl mx-auto p-6 w-full">
        <div className="text-center mt-10 p-8 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-lg text-gray-600 font-medium">
            No se encontraron productos
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Intenta con otro código de barras o limpia los filtros.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-xl font-semibold text-gray-700 mb-6">
        Productos populares — {data.count.toLocaleString("es-ES")} encontrados
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data.products.map((product) => (
          <Product
            onSelectedProduct={onSelectedProduct}
            key={product.code}
            product={product}
            isSelected={selectedCodes?.includes(product.code)}
          />
        ))}
      </div>
    </div>
  );
}
