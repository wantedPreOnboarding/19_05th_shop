export interface CategoriesAPIType {
  conCategory1: {
    id: number;
    name: string;
    discountRate: number;
    imageUrl: string;
    conCategory2s: ConCategory2s[];
  };
}

export interface ConCategory2s {
  id: number;
  name: string;
  discountRate?: number;
  conCategory1Id?: number;
  imageUrl: string;
  conItems?: ContItems[];
}

export interface ContItems {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count?: number;
  imageUrl: string;
}
