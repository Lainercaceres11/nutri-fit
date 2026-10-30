import { useQuery } from "@tanstack/react-query";
import { openFoodService } from "../../../services/open-food-services";

export function useSimilarProducts(
  categoryTag: string,
  currentProductCode: string,
) {
  return useQuery({
    queryKey: ["similarProducts", categoryTag, currentProductCode],
    queryFn: async () => {
      if (!categoryTag) return [];

      const data = await openFoodService.getFoods({
        page: "1",
        page_size: "30",
        categories_tags: categoryTag,
      });

      const validAlternatives = data.products.filter(
        (p) => p.code !== currentProductCode && p.image_front_url,
      );

      return validAlternatives.slice(0, 6);
    },
    enabled: !!categoryTag && !!currentProductCode,
    staleTime: 1000 * 60 * 10,
  });
}
