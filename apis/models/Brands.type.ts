export interface BrandsProps {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
  conCategory2s: conCategory2sPros[];
}

export interface conCategory2sPros {
  id: number;
  name: string;
  conCategory1Id: number;
  imageUrl: string;
  conItems: contItemsProps[];
}

export interface contItemsProps {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  count: number;
  imageUrl: string;
}
