import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../services/api";
import type { Listing } from "../types";

export const useListings = () => {
  return useQuery({
    queryKey: ["listings"],
    queryFn: api.getListings,
  });
};

export const useListing = (id: string) => {
  return useQuery({
    queryKey: ["listing", id],
    queryFn: () => api.getListing(id),
    enabled: !!id,
  });
};

export const useCreateListing = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newListing: Omit<Listing, "id" | "createdAt">) =>
      api.createListing(newListing),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listings"] });
    },
  });
};

export const useSellerListings = (sellerId: string) => {
  return useQuery({
    queryKey: ["seller-listings", sellerId],
    queryFn: () => api.getSellerListings(sellerId),
    enabled: !!sellerId,
  });
};
