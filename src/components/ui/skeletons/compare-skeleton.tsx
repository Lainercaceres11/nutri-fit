export default function CompareSkeleton() {
  const columns = Array.from({ length: 3 });

  const rows = Array.from({ length: 8 });

  return (
    <main className="max-w-6xl mx-auto p-6 flex flex-col gap-6 bg-gray-50 min-h-screen animate-pulse">
      <div>
        <div className="h-5 w-40 bg-gray-200 rounded"></div>
      </div>

      <div className="h-9 w-80 bg-gray-200 rounded"></div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-200">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-4 w-1/4 align-top pt-8">
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
              </th>

              {columns.map((_, i) => (
                <th key={i} className="p-4 align-top w-1/3 relative">
                  <div className="flex flex-col items-center text-center mt-2">
                    {/* Imagen */}
                    <div className="h-24 w-24 bg-gray-200 rounded-lg mb-3"></div>
                    {/* Nombre */}
                    <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                    {/* Marca */}
                    <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 4 }).map((_, i) => (
              <tr key={`header-${i}`} className="border-b border-gray-100">
                <td className="p-4">
                  <div className="h-4 w-28 bg-gray-200 rounded"></div>
                </td>
                {columns.map((_, j) => (
                  <td key={`header-col-${j}`} className="p-4">
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                  </td>
                ))}
              </tr>
            ))}

            {rows.map((_, i) => (
              <tr
                key={`row-${i}`}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="p-4">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </td>
                {columns.map((_, j) => (
                  <td key={`row-col-${j}`} className="p-4">
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="h-4 w-3/4 bg-gray-200 rounded mt-2"></div>
    </main>
  );
}
