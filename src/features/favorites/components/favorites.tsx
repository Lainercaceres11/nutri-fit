import { useNavigate, Link } from "react-router";
import { Heart, Plus, Trash2, ArrowLeft } from "lucide-react";
import { useFavoriteStore } from "../../../store/favorites-store";

export default function Favorites() {
  const { favorites, cleanProduct, toggleProduct } = useFavoriteStore();
  const navigate = useNavigate();

  if (favorites.length === 0 || !favorites) {
    return (
      <section className="max-w-7xl mx-auto p-6 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
          <Heart className="w-16 h-16 text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No hay favoritos aún
          </h2>
          <p className="text-gray-500 mb-6">
            Guarda productos que te gusten para verlos aquí.
          </p>
          <Link
            to="/"
            className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Explorar productos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto p-6 min-h-screen">
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
            Favoritos
          </h1>
          <p className="text-gray-500 mt-2">
            {favorites.length}{" "}
            {favorites.length === 1
              ? "producto guardado"
              : "productos guardados"}
          </p>
        </div>

        <button
          onClick={cleanProduct}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Vaciar favoritos
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {favorites.map((product) => (
          <div
            key={product.code}
            className="flex flex-col bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center p-2">
              {product.image_front_url ? (
                <img
                  src={product.image_front_url}
                  alt={product.product_name || "Producto"}
                  className="object-contain h-full w-full"
                />
              ) : (
                <span className="text-gray-400 text-xs text-center">
                  Sin imagen
                </span>
              )}

              <button
                onClick={() => toggleProduct?.(product)}
                className="absolute top-2 left-2 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow-sm border border-gray-200 text-red-500 hover:bg-red-50"
                title="Quitar de favoritos"
              >
                <Heart className="w-4 h-4 fill-red-500" />
              </button>

              <button
                className="absolute top-2 right-2 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50"
                title="Añadir al comparador"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 flex flex-col grow">
              <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight">
                {product.product_name || "Nombre desconocido"}
              </h3>
              <p className="text-xs text-gray-500 mt-1 uppercase line-clamp-1">
                {product.brands || "Marca desconocida"}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5 mb-4">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    product.nutriscore_grade === "a"
                      ? "bg-green-500 text-white"
                      : product.nutriscore_grade === "b"
                        ? "bg-green-300 text-green-900"
                        : product.nutriscore_grade === "c"
                          ? "bg-yellow-400 text-yellow-900"
                          : product.nutriscore_grade === "d"
                            ? "bg-orange-500 text-white"
                            : product.nutriscore_grade === "e"
                              ? "bg-red-600 text-white"
                              : "bg-gray-200 text-gray-600"
                  }`}
                >
                  Nutri-Score {product.nutriscore_grade?.toUpperCase() || "N/D"}
                </span>

                {product.nova_group && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase bg-green-600 text-white">
                    Nova {product.nova_group}
                  </span>
                )}

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    product.ecoscore_grade === "a"
                      ? "bg-green-500 text-white"
                      : product.ecoscore_grade === "b"
                        ? "bg-green-300 text-green-900"
                        : product.ecoscore_grade === "c"
                          ? "bg-yellow-400 text-yellow-900"
                          : product.ecoscore_grade === "d"
                            ? "bg-orange-500 text-white"
                            : product.ecoscore_grade === "e"
                              ? "bg-red-600 text-white"
                              : "bg-gray-200 text-gray-600"
                  }`}
                >
                  Eco-Score {product.ecoscore_grade?.toUpperCase() || "N/D"}
                </span>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => navigate(`/food/${product.code}`)}
                  className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Ver detalle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
