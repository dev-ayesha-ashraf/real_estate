const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const getImageUrl = (filename: string): string => {
  return `${API_BASE_URL}/uploads/listings/${filename}`;
};

export const getImageUrlWithCheck = async (
  filename: string
): Promise<string | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/check-file/${filename}`);
    const data = await response.json();
    return data.exists ? getImageUrl(filename) : null;
  } catch (error) {
    console.error("Error checking file:", error);
    return null;
  }
};
