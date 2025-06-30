export interface Category {
  id: string;
  name: string;
  attributes: Attribute[];
  listings: Listing[];
  properties?: Record<string, any>;
  parentId?: string;
  parent?: Category;
  subcategories: Category[];
}

export interface Attribute {
  id: string;
  name: string;
  type: string;
  required: boolean;
  category?: Category;
  categoryId?: string;
  properties?: Record<string, any>;
}

export interface Listing {
  id: string;
  title: string;
  description?: string;
  price?: number;
  images: string[];
  location: string;
  categoryId: string;
  category?: Category;
  sellerId: string;
  seller?: Seller;
  attributes: Record<string, any>;
  createdAt: string;
  properties?: Record<string, any>;
}

export interface Seller {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
  listings: Listing[];
  properties?: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
}
