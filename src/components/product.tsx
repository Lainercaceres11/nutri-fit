import { Check, Plus } from "lucide-react";
import { ViewTransition } from "react";
import { Link } from "react-router";

export interface ProductType {
  code: string;
  product_name?: string;
  brands?: string;
  image_front_url?: string;
  nutriscore_grade?: string;
  ecoscore_grade?: string;
  nova_group?: number;
  allergens?: string;
}

type ProductsProps = {
  product: ProductType;
  onSelectedProduct?: (code: string) => void;
  isSelected: boolean;
};

export default function Product({
  product,
  isSelected,
  onSelectedProduct,
}: ProductsProps) {
  const handleSelectedCode = (code: string) => {
    if (onSelectedProduct) {
      onSelectedProduct(code);
    }
  };
  const getNutriScoreColor = (grade?: string): string => {
    switch (grade?.toLowerCase()) {
      case "a":
        return "bg-green-500 text-white";
      case "b":
        return "bg-green-300 text-green-900";
      case "c":
        return "bg-yellow-400 text-yellow-900";
      case "d":
        return "bg-orange-500 text-white";
      case "e":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  const getEcoScoreColor = (grade?: string): string => {
    switch (grade?.toLowerCase()) {
      case "a":
        return "bg-green-500 text-white";
      case "b":
        return "bg-green-300 text-green-900";
      case "c":
        return "bg-yellow-400 text-yellow-900";
      case "d":
        return "bg-orange-500 text-white";
      case "e":
        return "bg-red-600 text-white";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  return (
    <div
      key={product.code}
      className="flex flex-col bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center p-2">
        {product.image_front_url ? (
          <ViewTransition name={`product-title-${product.code}`}>
            <img
              src={product.image_front_url}
              alt={product.product_name || "Producto"}
              className="object-contain h-full w-full"
            />
          </ViewTransition>
        ) : (
          <span className="text-gray-400 text-sm">Sin imagen</span>
        )}
        <button
          onClick={() => handleSelectedCode(product.code)}
          type="button"
          className={`absolute top-2 right-2 ${!isSelected ? "bg-white text-gray-600 hover:bg-gray-50" : "bg-green-500 text-white hover:bg-green-600"} rounded-full w-7 h-7 flex items-center justify-center shadow-sm border border-gray-200   `}
        >
          {isSelected ? <Check /> : <Plus />}
        </button>
      </div>

      <div className="p-4 flex flex-col grow">
        <h2 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight">
          {product.product_name || "Nombre desconocido"}
        </h2>

        <p className="text-xs text-gray-500 mt-1 uppercase line-clamp-1">
          Código: {product.code}
        </p>
        <p className="text-xs text-gray-500 mt-1 uppercase line-clamp-1">
          {product.brands || "Marca desconocida"}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5 mb-4">
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${getNutriScoreColor(product.nutriscore_grade)}`}
          >
            Nutri-Score {product.nutriscore_grade?.toUpperCase() || "N/D"}
          </span>

          {product.nova_group && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase bg-red-600 text-white">
              Nova {product.nova_group}
            </span>
          )}

          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${getEcoScoreColor(product.ecoscore_grade)}`}
          >
            Eco-Score {product.ecoscore_grade?.toUpperCase() || "N/D"}
          </span>
        </div>

        <div className="mt-auto">
          <Link
            to={`/food/${product.code}`}
            className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}
