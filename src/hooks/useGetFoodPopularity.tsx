import { useQuery } from "@tanstack/react-query";
import { openFoodService } from "../services/open-food-services";

export default function useGetFoodPopularity(
  countries_tags: string,
  categories_tags: string,
  searchBarcode: string,
  page: number,
) {
  return useQuery({
    queryKey: [
      "foods",
      "popularity",
      countries_tags,
      categories_tags,
      searchBarcode,
      page,
    ],
    queryFn: () =>
      openFoodService.getFoods({
        page: page.toString(),
        page_size: "20",
        countries_tags: countries_tags || "",
        categories_tags: categories_tags || "",
        code: searchBarcode || "",
      }),
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 15,
  });
}
