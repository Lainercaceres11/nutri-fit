export default function FoodSkeleton() {
  return (
    <main className="max-w-5xl mx-auto p-6 flex flex-col gap-6 bg-gray-50 min-h-screen animate-pulse">
      <div>
        <div className="h-9 w-48 bg-gray-200 rounded-lg"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="bg-gray-200 rounded-xl h-80 w-full shadow-sm"></div>

          <div className="flex flex-wrap gap-2">
            <div className="h-6 w-24 bg-gray-200 rounded"></div>
            <div className="h-6 w-20 bg-gray-200 rounded"></div>
            <div className="h-6 w-full bg-gray-200 rounded"></div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
            <div className="flex flex-col gap-2 grow">
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
              <div className="h-5 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div>
            <div className="h-9 w-3/4 bg-gray-200 rounded mb-4"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </div>
              ))}
              <div className="col-span-2 md:col-span-3">
                <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Tabla de Información Nutricional */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="h-6 w-64 bg-gray-200 rounded mb-4"></div>
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2">
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  </th>
                  <th className="px-4 py-2 text-right">
                    <div className="h-4 w-12 bg-gray-200 rounded ml-auto"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="px-4 py-3">
                      <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    </td>
                    <td className="px-4 py-3 flex justify-end">
                      <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="h-6 w-40 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-28 bg-gray-200 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="h-5 w-24 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="h-5 w-20 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 w-28 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
