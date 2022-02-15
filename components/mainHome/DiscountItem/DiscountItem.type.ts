export type DiscountCon = {
  disItems: {
    name: string;
    imageUrl: string;
    brand: string;
    discountRate: number;
    originalPrice: number;
    minSellingPrice: number;
  }[];
};
