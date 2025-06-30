import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useSeller = (id: string) => {
  return useQuery({
    queryKey: ["seller", id],
    queryFn: () => api.getSeller(id),
    enabled: !!id,
  });
};
