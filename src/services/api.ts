import axiosInstance from "@/utils/apiInstance";
import { Category, Listing, Seller } from "../types";

export const api = {
  getCategories: async (): Promise<Category[]> => {
    console.log("📡 Calling /categories API");
    const { data } = await axiosInstance.get("/categories");
    console.log("✅ Categories fetched:", data);
    return data;
  },

  getCategory: async (id: string): Promise<Category> => {
    const { data } = await axiosInstance.get(`/categories/${id}`);
    return data;
  },

  getListingsByCategory: async (categoryId: string): Promise<Listing[]> => {
    const { data } = await axiosInstance.get(
      `/listings/category/${categoryId}`
    );
    return data;
  },

  getListings: async (): Promise<Listing[]> => {
    const { data } = await axiosInstance.get("/listings");
    return data;
  },

  getListing: async (id: string): Promise<Listing> => {
    const { data } = await axiosInstance.get(`/listings/${id}`);
    return data;
  },

  createListing: async (
    listing: Omit<Listing, "id" | "createdAt">
  ): Promise<Listing> => {
    const { data } = await axiosInstance.post("/listings", listing);
    return data;
  },

  // Sellers
  getSeller: async (id: string): Promise<Seller> => {
    const { data } = await axiosInstance.get(`/sellers/${id}`);
    return data;
  },

  getSellerListings: async (sellerId: string): Promise<Listing[]> => {
    const { data } = await axiosInstance.get(`/sellers/${sellerId}/listings`);
    return data;
  },

  // File Upload
  uploadFile: async (file: File): Promise<{ url: string }> => {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await axiosInstance.post("", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  },

  // File Check
  checkFile: async (
    filename: string
  ): Promise<{ exists: boolean; path: string; stats: any }> => {
    const { data } = await axiosInstance.get(`/check-file/${filename}`);
    return data;
  },
};
