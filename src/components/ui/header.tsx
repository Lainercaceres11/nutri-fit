import { Heart, BarChart2 } from "lucide-react";
import { Link } from "react-router";
import { useSelectedCode } from "../../context/codes-context";
import { useFavoriteStore } from "../../store/favorites-store";
export default function Header() {
  const { selectedCodes } = useSelectedCode();
  const { favorites } = useFavoriteStore();

  const selectedCodesJoin = selectedCodes.join(",");
  const isCompareDisabled = selectedCodes.length === 0;

  const baseStyles =
    "relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors border shadow-sm";
  const enabledStyles =
    "bg-white border-gray-200 text-gray-700 hover:bg-gray-50";
  const disabledStyles =
    "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed";

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <div className="bg-[#10B981] p-2.5 rounded-xl shadow-sm">
            <Heart className="w-6 h-6 text-white fill-white" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900 leading-tight">
              NutriFit
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Análisis de alimentos
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/favorites" className={`${baseStyles} ${enabledStyles}`}>
            <Heart className="w-4 h-4 text-gray-500" />
            Favoritos
            {favorites.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
                {favorites.length}
              </span>
            )}
          </Link>

          {isCompareDisabled ? (
            <button disabled className={`${baseStyles} ${disabledStyles}`}>
              <BarChart2 className="w-4 h-4 text-gray-300" />
              Comparar
            </button>
          ) : (
            <Link
              to={`/compare/${selectedCodesJoin}`}
              className={`${baseStyles} ${enabledStyles}`}
            >
              <BarChart2 className="w-4 h-4 text-gray-500" />
              Comparar
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
                {selectedCodes.length}
              </span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
