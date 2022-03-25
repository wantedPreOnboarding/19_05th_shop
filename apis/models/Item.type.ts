export default interface ItemsAPIType {
  conItem: ConItem;
}

export interface ConItem {
  id: number;
  name: string;
  originalPrice: number;
  minSellingPrice: number;
  ncSellingPrice: number;
  information: string;
  tip?: unknown;
  warning: string;
  discountRate: number;
  info?: unknown;
  isOnlyAccount: number;
  conCategory2Id: number;
  imageUrl: string;
  conCategory2: ConCategory2;
  options: Option[];
}

export interface ConCategory1 {
  id: number;
  name: string;
  createdAt: Date;
  priority: number;
  discountRate: number;
  info: string;
  imageUrl: string;
}

export interface ConCategory2 {
  id: number;
  name: string;
  adminUserId: number;
  priority: number;
  createdAt: Date;
  conCategory1Id: number;
  info: string;
  imageUrl: string;
  conCategory1: ConCategory1;
}

export interface Option {
  expireAt: Date;
  count: number;
  sellingPrice: number;
}
