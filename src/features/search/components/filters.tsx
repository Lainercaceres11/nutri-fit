import React from "react";
import {
  CupSoda,
  Milk,
  Wheat,
  Cookie,
  Croissant,
  Apple,
  Beef,
  Fish,
  Candy,
  Snowflake,
  Leaf,
  Sparkles,
  Globe,
} from "lucide-react";

type FiltersProps = {
  onSelectedCountry: (country: string) => void;
  onSelectedCategory: (category: string) => void;
  activeCountry: string;
  activeCategory: string;
};

interface FilterOption {
  id: string;
  label: string;
  icon: React.ElementType;
}

const CATEGORIES: FilterOption[] = [
  { id: "beverages", label: "Bebidas", icon: CupSoda },
  { id: "dairies", label: "Lácteos", icon: Milk },
  { id: "cereals", label: "Cereales", icon: Wheat },
  { id: "snacks", label: "Snacks", icon: Cookie },
  { id: "breads", label: "Panadería", icon: Croissant },
  { id: "fruits", label: "Frutas y verduras", icon: Apple },
  { id: "meats", label: "Carnes", icon: Beef },
  { id: "fishes", label: "Pescados", icon: Fish },
  { id: "chocolates", label: "Chocolates", icon: Candy },
  { id: "frozen-foods", label: "Congelados", icon: Snowflake },
  { id: "vegan", label: "Vegano", icon: Leaf },
  { id: "organic", label: "Orgánico", icon: Sparkles },
];

const COUNTRIES: string[] = [
  "Colombia",
  "México",
  "España",
  "Argentina",
  "Chile",
  "Perú",
  "Ecuador",
  "Brasil",
  "Costa rica",
  "Panama",
];

export default function Filters({
  onSelectedCountry,
  onSelectedCategory,
  activeCountry,
  activeCategory,
}: FiltersProps) {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-1">
          Explora por categoría
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Toca una opción para ver productos al instante.
        </p>

        <div className="flex flex-wrap gap-2.5">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;

            return (
              <button
                onClick={() => onSelectedCategory(category.id)}
                key={category.id}
                className={`flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white border-gray-900" // Estilo activo
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400" // Estilo normal
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"}`}
                />
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-4 h-4 text-gray-500" />
          <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider">
            Productos por país
          </h3>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {COUNTRIES.map((country) => {
            const isActive = activeCountry === country;

            return (
              <button
                key={country}
                onClick={() => onSelectedCountry(country)}
                className={`px-4 py-1.5 border rounded-full text-sm transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                }`}
              >
                {country}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
