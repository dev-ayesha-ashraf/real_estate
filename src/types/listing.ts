export interface Feature {
  _id: string;
  name: string;
  value: string;
}

export interface Seller {
  _id: string;
  name: string;
  image: string | null;
  email: string;
  phoneNo: string | null;
  address: string | null;
  type: string; // e.g., 'dealer', 'agent', 'owner', etc.
}

export interface Image {
  _id: string;
  image: string;
  isPrimary: boolean;
}

export interface Specification {
  _id: string;
  name: string;
  value: string | number | boolean | string[];
}

export interface Listing {
  _id: string;
  title: string;
  description: string;
  price: string;
  seller: Seller;
  features: Feature[];
  images: Image[];
  badges: string[];
  address: string;
  specifications: Specification[];
  slug: string;
  category: string; // e.g., 'cars', 'real-estate', 'electronics', etc.
  status: "active" | "sold" | "rented" | "pending";
  currency: string;
  createdAt: string;
  updatedAt: string;
}
