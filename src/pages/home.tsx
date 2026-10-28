import { X } from "lucide-react";
import Filters from "../components/filters";
import Products from "../components/products";
import SearchBar from "../components/search-filter";
import useGetFoodPopularity from "../hooks/useGetFoodPopularity";
import { useSearchFilters } from "../hooks/useSearchFilters";
import Pagination from "../components/pagination";
import { useSelectedCode } from "../context/codes-context";

export default function Home() {
  const {
    selectedCountry,
    selectedCategory,
    searchBarcode,
    currentPage,
    handleFilterChange,
    handleSearch,
    handlePageChange,
    clearAll,
    hasActiveFilters,
  } = useSearchFilters();

  const { data, isLoading, error } = useGetFoodPopularity(
    selectedCountry,
    selectedCategory,
    searchBarcode,
    currentPage,
  );

  const { selectedCodes, onSelectedCodes } = useSelectedCode();

  return (
    <main className="flex flex-col gap-4 p-6">
      <SearchBar onSearch={handleSearch} />

      <Filters
        onSelectedCountry={(country) => handleFilterChange("country", country)}
        onSelectedCategory={(category) =>
          handleFilterChange("category", category)
        }
        activeCountry={selectedCountry}
        activeCategory={selectedCategory}
      />

      {hasActiveFilters && (
        <div className="w-full max-w-7xl mx-auto flex justify-end">
          <button
            onClick={clearAll}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
            Limpiar búsqueda y filtros
          </button>
        </div>
      )}

      {error && (
        <div className="max-w-7xl mx-auto w-full text-center text-red-500 mt-4">
          {error.message}
        </div>
      )}

      <Products
        selectedCodes={selectedCodes}
        onSelectedProduct={onSelectedCodes}
        isLoading={isLoading}
        data={data!}
      />

      {data && data.page_count > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={data.page_count}
          totalItems={data.count}
          pageSize={20}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}
