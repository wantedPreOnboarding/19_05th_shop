export type DiscountCon = {
  disItems: {
    href: string;
    itemName: string;
    imageUrl: string;
    brand: string;
    discountRate: number;
    originalPrice: number;
    minSellingPrice: number;
  }[];
};
