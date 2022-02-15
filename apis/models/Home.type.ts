export type MainCategoriesType = {
  conCategory1s: MainCategory[];
};

export type ConItemsType = {
  conItems: ConItem[];
};

export interface MainCategory {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

export interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  createdAt: string;
  sfId: string;
  minSellingPrice: number;
  ncSellingPrice: number;
  count: number;
  information: null;
  tip: null;
  warning: string;
  discountRate: number;
  askingPrice: number;
  isRefuse: number;
  isBlock: number;
  info: null;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: {
    id: number;
    name: string;
    adminUserId: number;
    priority: number;
    createdAt: string;
    conCategory1Id: number;
    info: null;
    imageUrl: string;
    conCategory1: {
      id: number;
      name: string;
      createdAt: string;
      priority: number;
      discountRate: number;
      info: string;
      imageUrl: string;
    };
  };
}
