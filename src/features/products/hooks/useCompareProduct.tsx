import { useQuery } from "@tanstack/react-query";
import { openFoodService } from "../../../services/open-food-services";

export default function useCompareProduct(codes: string[]) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["compare", codes.join(",")],
    queryFn: () => openFoodService.compareProducts(codes),
  });

  return { data, isLoading, error };
}
