import { useQuery } from "@tanstack/react-query";
import { openFoodService } from "../services/open-food-services";

export default function useGetProductByCode(code: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["food", code],
    queryFn: () => openFoodService.getFoodByCode(code),
    enabled: !!code,
  });

  return { data, isLoading, error };
}
