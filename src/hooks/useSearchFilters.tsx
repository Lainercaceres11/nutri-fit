import { useSearchParams } from "react-router";

export function useSearchFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCountry = searchParams.get("country") || "";
  const selectedCategory = searchParams.get("category") || "";
  const searchBarcode = searchParams.get("barcode") || "";
  const currentPage = Number(searchParams.get("page")) || 1;

  const handleFilterChange = (key: "country" | "category", value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.get(key) === value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    newParams.set("page", "1"); 
    setSearchParams(newParams);
  };

  const handleSearch = (barcode: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (barcode) {
      newParams.set("barcode", barcode);
    } else {
      newParams.delete("barcode");
    }
    newParams.set("page", "1"); 
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  };

  const clearAll = () => {
    setSearchParams(new URLSearchParams());
  };

  const hasActiveFilters = Boolean(
    selectedCountry || selectedCategory || searchBarcode,
  );

  return {
    selectedCountry,
    selectedCategory,
    searchBarcode,
    currentPage,
    handleFilterChange,
    handleSearch,
    handlePageChange,
    clearAll,
    hasActiveFilters,
  };
}
