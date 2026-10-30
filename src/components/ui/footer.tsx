import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-6 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-500 text-center lg:text-left max-w-4xl leading-relaxed">
          Datos proporcionados por{" "}
          <a
            href="https://openfoodfacts.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:underline inline-flex items-center gap-1"
          >
            Open Food Facts
            <ExternalLink className="w-3.5 h-3.5" />
          </a>{" "}
          — una base de datos colaborativa de productos alimentarios bajo
          licencia Open Database License (ODbL). NutriFit es un proyecto
          independiente y no está afiliado oficialmente con Open Food Facts.
        </div>

        <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden shrink-0">
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors">
            <span className="text-sm font-semibold text-gray-800">
              Made in Lainer
            </span>
          </button>

          <div className="w-px h-6 bg-gray-200"></div>
        </div>
      </div>
    </footer>
  );
}
