import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: api.getCategories,
  });
};

export const useCategory = (id: string) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => api.getCategory(id),
    enabled: !!id,
  });
};

export const useListingsByCategory = (categoryId: string) => {
  return useQuery({
    queryKey: ["listings", "category", categoryId],
    queryFn: () => api.getListingsByCategory(categoryId),
    enabled: !!categoryId,
  });
};
