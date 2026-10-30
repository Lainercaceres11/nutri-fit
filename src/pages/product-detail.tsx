import { useParams, useNavigate } from "react-router";
import { Barcode, ArrowLeft, Heart } from "lucide-react";
import useGetProductByCode from "../hooks/useGetFoodByCode";
import { useLayoutEffect, ViewTransition } from "react";
import FoodSkeleton from "../components/skeletons/food-skeleton";
import { useSimilarProducts } from "../hooks/use-similar-products";
import SimilarProducts from "../components/similar-products";
import { useSelectedCode } from "../context/codes-context";
import { useFavoriteStore } from "../store/favorites-store";

export default function ProductDetail() {
  const { code } = useParams();
  const { data, isLoading, error } = useGetProductByCode(code ?? "");
  const { isFavorite, toggleProduct } = useFavoriteStore();

  const tags = data?.categories_tags || [];
  const mainCategory =
    tags.length > 2 ? tags[tags.length - 2] : tags[tags.length - 1] || "";
  const { data: alternatives, isLoading: isLoadingAlternatives } =
    useSimilarProducts(mainCategory, code ?? "");

  const navigate = useNavigate();

  const { selectedCodes, onSelectedCodes } = useSelectedCode();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (isLoading) {
    return <FoodSkeleton />;
  }

  if (error || !data) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <p className="text-red-500 mb-4">Producto no encontrado.</p>

        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline"
        >
          Volver a los resultados
        </button>
      </div>
    );
  }

  const nutrients = [
    {
      label: "Energía",
      value: data.nutriments?.["energy-kcal_100g"],
      unit: "kcal",
    },
    { label: "Energía", value: data.nutriments?.energy_100g, unit: "kJ" },
    { label: "Grasas", value: data.nutriments?.fat_100g, unit: "g" },
    {
      label: "Grasas saturadas",
      value: data.nutriments?.["saturated-fat_100g"],
      unit: "g",
    },
    {
      label: "Carbohidratos",
      value: data.nutriments?.carbohydrates_100g,
      unit: "g",
    },
    { label: "Azúcares", value: data.nutriments?.sugars_100g, unit: "g" },
    { label: "Fibra", value: data.nutriments?.fiber_100g, unit: "g" },
    { label: "Proteínas", value: data.nutriments?.proteins_100g, unit: "g" },
    { label: "Sal", value: data.nutriments?.salt_100g, unit: "g" },
    { label: "Sodio", value: data.nutriments?.sodium_100g, unit: "g" },
  ];

  return (
    <main className="max-w-5xl mx-auto p-6 flex flex-col gap-6 bg-gray-50 min-h-screen">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a los resultados
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4 flex justify-center items-center h-80 shadow-sm">
            {data.image_front_url ? (
              <ViewTransition name={`product-title-${data.code}`}>
                <img
                  src={data.image_front_url}
                  alt={data.product_name || "Producto"}
                  className="h-full object-contain"
                />
              </ViewTransition>
            ) : (
              <span className="text-gray-400">Sin imagen</span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className=" rounded-full w-7 h-7 flex items-center justify-center shadow-sm border border-gray-200 text-red-500 hover:bg-red-50"
              aria-label="Marcar como favorito"
              onClick={() => toggleProduct(data)}
            >
              <Heart
                className={`${isFavorite(data.code) ? "fill-red-600" : "fill-amber-50"}`}
              />
            </button>
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
              Nutri-Score {data.nutriscore_grade?.toUpperCase() || "N/D"}
            </span>
            <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded uppercase">
              Nova {data.nova_group || "N/D"}
            </span>
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase w-full text-center">
              Eco-Score {data.ecoscore_grade?.toUpperCase() || "N/D"}
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <Barcode className="w-6 h-6 text-gray-500" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                Código de barras
              </p>
              <p className="font-bold text-gray-900">{data._id}</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {data.product_name || "Nombre desconocido"}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 text-sm">
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Marca</p>
                <p className="text-gray-800">{data.brands || "—"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Cantidad</p>
                <p className="text-gray-800">{data.quantity || "—"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">
                  Categorías
                </p>
                <p className="text-gray-800">{data.categories || "—"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Envase</p>
                <p className="text-gray-800">{data.packaging || "—"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">
                  Etiquetas
                </p>
                <p className="text-gray-800">{data.labels || "—"}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase mb-1">Tiendas</p>
                <p className="text-gray-800">{data.stores || "—"}</p>
              </div>
              <div className="col-span-2 md:col-span-3">
                <p className="text-xs text-gray-500 uppercase mb-1">Países</p>
                <p className="text-gray-800">{data.countries || "—"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Información nutricional (por 100 g/ml)
            </h2>
            <table className="w-full text-sm text-left text-gray-600">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2 font-medium">Nutriente</th>
                  <th className="px-4 py-2 font-medium text-right">Valor</th>
                </tr>
              </thead>
              <tbody>
                {nutrients.map(
                  (nutrient, index) =>
                    nutrient.value !== undefined && (
                      <tr
                        key={index}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <td className="px-4 py-2">{nutrient.label}</td>
                        <td className="px-4 py-2 text-right font-medium text-gray-900">
                          {nutrient.value} {nutrient.unit}
                        </td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Ingredientes
            </h2>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              {data.ingredients_text || "No especificados."}
            </p>

            {data.ingredients_analysis_tags &&
              data.ingredients_analysis_tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {data.ingredients_analysis_tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full border border-green-100"
                    >
                      {tag.replace("en:", "").replace(/-/g, " ")}
                    </span>
                  ))}
                </div>
              )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Alérgenos</h3>
              <p className="text-sm text-gray-500">
                {data.allergens
                  ? data.allergens.replace(/en:/g, "")
                  : "Ninguno declarado"}
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Aditivos</h3>
              <p className="text-sm text-gray-500">
                {data.additives_tags && data.additives_tags.length > 0
                  ? data.additives_tags.join(", ").replace(/en:/g, "")
                  : "Ninguno declarado"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <SimilarProducts
        selectedCodes={selectedCodes}
        onSelectedProduct={onSelectedCodes}
        alternatives={alternatives ?? null}
        isLoadingAlternatives={isLoadingAlternatives}
      />
    </main>
  );
}
