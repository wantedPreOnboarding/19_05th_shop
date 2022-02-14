export type MainCategories = {
  conCategory1s: MainCategory[];
};

export interface MainCategory {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}
