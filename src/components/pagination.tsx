import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
}: PaginationProps) {
  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-2 text-sm text-gray-500">
      <div>
        Mostrando{" "}
        <span className="font-medium text-gray-700">
          {startItem}-{endItem}
        </span>{" "}
        de{" "}
        <span className="font-medium text-gray-700">
          {totalItems.toLocaleString("es-ES")}
        </span>{" "}
        productos
      </div>

      <div className="flex items-center gap-2 mt-4 md:mt-0">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </button>

        <div className="px-2 font-medium text-gray-700">
          {currentPage} / {totalPages.toLocaleString("es-ES")}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Siguiente
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
