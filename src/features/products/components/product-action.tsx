import { Heart } from "lucide-react";
import { Link } from "react-router";
import { useFavoriteStore } from "../../../store/favorites-store";
import type { ProductType } from "./product";

type ProductActionProps = {
  product: ProductType;
};

export default function ProductAction({ product }: ProductActionProps) {
  const { toggleProduct, isFavorite } = useFavoriteStore();
  return (
    <div className="mt-auto flex gap-2 justify-center items-center flex-wrap">
      <Link
        to={`/food/${product.code}`}
        className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Ver detalle
      </Link>

      <button
        className=" rounded-full w-7 h-7 flex items-center justify-center shadow-sm border border-gray-200 text-red-500 hover:bg-red-50"
        aria-label="Marcar como favorito"
        onClick={() => toggleProduct(product)}
      >
        <Heart
          className={`${isFavorite(product.code) ? "fill-red-600" : "fill-amber-50"}`}
        />
      </button>
    </div>
  );
}
