import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, X } from "lucide-react";
import useCompareProduct from "../hooks/useCompareProduct";
import type { Product } from "../types/types"; // Asumiendo que exportas Product de aquí
import CompareSkeleton from "../components/skeletons/compare-skeleton";
import { useSelectedCode } from "../context/codes-context";

type NutrientKey = keyof NonNullable<Product["nutriments"]>;

interface NutrientRow {
  key: NutrientKey;
  label: string;
  unit: string;
  lowerIsBetter: boolean;
}

export default function Compare() {
  const { selectedProducts } = useParams();
  const codesToString = selectedProducts?.split(",") ?? [""];

  const { onSelectedCodes } = useSelectedCode();

  const { data, isLoading, error } = useCompareProduct(codesToString);

  const navigate = useNavigate();
  if (isLoading) {
    return <CompareSkeleton />;
  }

  if (error || !data || !data.products) {
    return (
      <p className="text-center mt-20 text-red-500">
        Error al cargar los productos.
      </p>
    );
  }

  const handleRemoveProduct = (codeToRemove: string) => {
  
    onSelectedCodes(codeToRemove);

  
    const newCodes = codesToString.filter((code) => code !== codeToRemove);
    if (newCodes.length === 0) {
      navigate("/");
    } else {
      navigate(`/compare/${newCodes.join(",")}`);
    }
  };

  const products: Product[] = data.products;

  const nutrientRows: NutrientRow[] = [
    {
      key: "energy-kcal_100g",
      label: "ENERGÍA (KCAL)",
      unit: "kcal",
      lowerIsBetter: true,
    },
    { key: "fat_100g", label: "GRASAS (G)", unit: "g", lowerIsBetter: true },
    {
      key: "saturated-fat_100g",
      label: "GRASAS SATURADAS (G)",
      unit: "g",
      lowerIsBetter: true,
    },
    {
      key: "carbohydrates_100g",
      label: "CARBOHIDRATOS (G)",
      unit: "g",
      lowerIsBetter: true,
    },
    {
      key: "sugars_100g",
      label: "AZÚCARES (G)",
      unit: "g",
      lowerIsBetter: true,
    },
    { key: "fiber_100g", label: "FIBRA (G)", unit: "g", lowerIsBetter: false },
    {
      key: "proteins_100g",
      label: "PROTEÍNAS (G)",
      unit: "g",
      lowerIsBetter: false,
    },
    { key: "salt_100g", label: "SAL (G)", unit: "g", lowerIsBetter: true },
  ];

  const getBestValueClass = (
    nutrientKey: NutrientKey,
    lowerIsBetter: boolean,
    currentProductCode: string,
  ): string => {
    const validValues = products
      .map((p) => ({
        code: p.code,
        value: p.nutriments?.[nutrientKey] as number | undefined,
      }))
      .filter((p) => p.value !== undefined && p.value !== null);

    if (validValues.length < 2) return "";

    const bestValue = lowerIsBetter
      ? Math.min(...validValues.map((v) => v.value as number))
      : Math.max(...validValues.map((v) => v.value as number));

    const currentProductValue = products.find(
      (p) => p.code === currentProductCode,
    )?.nutriments?.[nutrientKey];

    return currentProductValue === bestValue
      ? "text-green-600 font-medium"
      : "";
  };

  // 4. Tipamos el renderizado de valores
  const renderValue = (
    value: number | string | undefined | null,
    unit: string = "",
  ): string => {
    if (value === undefined || value === null) return "—";
    return `${value} ${unit}`;
  };

  return (
    <main className="max-w-6xl mx-auto p-6 flex flex-col gap-6 bg-gray-50 min-h-screen">
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a resultados
        </Link>
      </div>

      <h1 className="text-3xl font-extrabold text-gray-900">
        Comparación nutricional
      </h1>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-200">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-4 w-1/4 align-top pt-8">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Producto
                </span>
              </th>

              {products.map((product) => (
                <th key={product.code} className="p-4 align-top w-1/3 relative">
                  <button
                    onClick={() => handleRemoveProduct(product.code)}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-700 bg-gray-100 rounded-full"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex flex-col items-center text-center mt-2">
                    {product.image_front_url ? (
                      <img
                        src={product.image_front_url}
                        alt={product.product_name || "Producto"}
                        className="h-24 w-24 object-contain mb-3"
                      />
                    ) : (
                      <div className="h-24 w-24 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-xs text-gray-400">
                        Sin imagen
                      </div>
                    )}
                    <span className="font-bold text-gray-800 text-sm line-clamp-2">
                      {product.product_name || "Producto sin nombre"}
                    </span>
                    <span className="text-xs text-gray-500 mt-1 line-clamp-1 uppercase">
                      {product.brands || "Marca desconocida"}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Nutri-Score
              </td>
              {products.map((product) => (
                <td
                  key={product.code}
                  className="p-4 font-medium text-gray-800"
                >
                  {product.nutriscore_grade?.toUpperCase() || "—"}
                </td>
              ))}
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Nutri-Score (PTS)
              </td>
              {products.map((product) => (
                <td
                  key={product.code}
                  className="p-4 font-medium text-gray-800"
                >
                  {/* TypeScript se quejará si nutriscore_score no está en tu tipo Product, 
                      puedes castearlo o añadirlo a la interfaz */}
                  {product.nutriscore_score ?? "—"}
                </td>
              ))}
            </tr>

            <tr className="border-b border-gray-100">
              <td className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Nova
              </td>
              {products.map((product) => (
                <td
                  key={product.code}
                  className="p-4 font-medium text-gray-800"
                >
                  {product.nova_group || "—"}
                </td>
              ))}
            </tr>

            <tr className="border-b border-gray-200">
              <td className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Eco-Score
              </td>
              {products.map((product) => (
                <td
                  key={product.code}
                  className="p-4 font-medium text-gray-800 uppercase"
                >
                  {product.ecoscore_grade?.toUpperCase() || "—"}
                </td>
              ))}
            </tr>

            {nutrientRows.map((row) => (
              <tr
                key={row.key}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {row.label}
                </td>
                {products.map((product) => {
                  const value = product.nutriments?.[row.key] as
                    | number
                    | undefined;
                  const highlightClass = getBestValueClass(
                    row.key,
                    row.lowerIsBetter,
                    product.code,
                  );

                  return (
                    <td
                      key={product.code}
                      className={`p-4 text-sm ${highlightClass}`}
                    >
                      {renderValue(value, row.unit)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 italic">
        Los valores en verde indican el mejor valor por nutriente (menor es
        mejor para azúcares, grasas y sal). Comparativa por 100 g/ml.
      </p>
    </main>
  );
}
