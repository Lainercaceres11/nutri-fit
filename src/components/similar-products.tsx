import { useNavigate } from "react-router";
import type { Product } from "../types/types";
import { Check, Plus, Sparkles } from "lucide-react";

type SimilarProductsProps = {
  isLoadingAlternatives: boolean;
  alternatives: Product[] | null;
  onSelectedProduct?: (code: string) => void;
  selectedCodes: string[];
};

export default function SimilarProducts({
  alternatives,
  isLoadingAlternatives,
  selectedCodes,
  onSelectedProduct,
}: SimilarProductsProps) {
  const navigate = useNavigate();

  const handleSelectedCode = (code: string) => {
    if (onSelectedProduct) {
      onSelectedProduct(code);
    }
  };

  return (
    <>
      {isLoadingAlternatives && (
        <div className="w-full text-center py-6 text-gray-500">
          Cargando productos similares...
        </div>
      )}

      {alternatives && alternatives.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-green-600" />
            <h2 className="text-xl font-bold text-gray-900">
              Productos similares
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {alternatives.map((alt) => {
              const isSelected = selectedCodes.includes(alt.code);
              return (
                <div
                  key={alt.code}
                  className="flex flex-col bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center p-2">
                    {alt.image_front_url ? (
                      <img
                        src={alt.image_front_url}
                        alt={alt.product_name || "Producto"}
                        className="object-contain h-full w-full"
                      />
                    ) : (
                      <span className="text-gray-400 text-xs text-center">
                        Sin imagen
                      </span>
                    )}
                    <button
                      onClick={() => handleSelectedCode(alt.code)}
                      type="button"
                      className={`absolute top-2 right-2 ${!isSelected ? "bg-white text-gray-600 hover:bg-gray-50" : "bg-green-500 text-white hover:bg-green-600"} rounded-full w-7 h-7 flex items-center justify-center shadow-sm border border-gray-200   `}
                    >
                      {isSelected ? <Check /> : <Plus />}
                    </button>
                  </div>

                  <div className="p-4 flex flex-col grow">
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight">
                      {alt.product_name || "Nombre desconocido"}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 uppercase line-clamp-1">
                      {alt.brands || "Marca desconocida"}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5 mb-4">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          alt.nutriscore_grade === "a"
                            ? "bg-green-500 text-white"
                            : alt.nutriscore_grade === "b"
                              ? "bg-green-300 text-green-900"
                              : alt.nutriscore_grade === "c"
                                ? "bg-yellow-400 text-yellow-900"
                                : alt.nutriscore_grade === "d"
                                  ? "bg-orange-500 text-white"
                                  : alt.nutriscore_grade === "e"
                                    ? "bg-red-600 text-white"
                                    : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        Nutri-Score{" "}
                        {alt.nutriscore_grade?.toUpperCase() || "N/D"}
                      </span>

                      {alt.nova_group && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase bg-green-600 text-white">
                          Nova {alt.nova_group}
                        </span>
                      )}

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          alt.ecoscore_grade === "a"
                            ? "bg-green-500 text-white"
                            : alt.ecoscore_grade === "b"
                              ? "bg-green-300 text-green-900"
                              : alt.ecoscore_grade === "c"
                                ? "bg-yellow-400 text-yellow-900"
                                : alt.ecoscore_grade === "d"
                                  ? "bg-orange-500 text-white"
                                  : alt.ecoscore_grade === "e"
                                    ? "bg-red-600 text-white"
                                    : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        Eco-Score {alt.ecoscore_grade?.toUpperCase() || "N/D"}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <button
                        onClick={() => navigate(`/food/${alt.code}`)}
                        className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
