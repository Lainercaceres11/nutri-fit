import { Heart, Library } from "lucide-react";
import { Link } from "react-router";
import { useSelectedCode } from "../context/codes-context";

export default function Header() {
  const { selectedCodes } = useSelectedCode();

  const selectedCodesJoin = selectedCodes.join(",");

  const isDisabled = selectedCodes.length === 0;

  const baseStyles =
    "relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm border";
  const enabledStyles =
    "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";
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

        {isDisabled ? (
          <button disabled className={`${baseStyles} ${disabledStyles}`}>
            <Library className="w-4 h-4 text-gray-300" />
            Comparar
          </button>
        ) : (
          <Link
            to={`/compare/${selectedCodesJoin}`}
            className={`${baseStyles} ${enabledStyles}`}
          >
            <Library className="w-4 h-4 text-gray-500" />
            Comparar
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-green-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-sm">
              {selectedCodes.length}
            </span>
          </Link>
        )}
      </div>
    </header>
  );
}
