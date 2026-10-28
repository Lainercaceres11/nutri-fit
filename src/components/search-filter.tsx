import React, { useState } from "react";
import { Barcode } from "lucide-react";

type SearchBarProps = {
  onSearch: (barcode: string) => void;
};

export default function SearchFilter({ onSearch }: SearchBarProps) {
  const [barcode, setBarcode] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (barcode.trim()) {
      onSearch(barcode);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-3 p-2"
    >
      <div className="relative grow w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Barcode className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={barcode}
          onChange={(e) => setBarcode(e.target.value)}
          placeholder="Buscar por código de barras (ej. 7622210992314)"
          className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white font-medium rounded-xl transition-colors flex items-center justify-center"
      >
        Buscar
      </button>
    </form>
  );
}
