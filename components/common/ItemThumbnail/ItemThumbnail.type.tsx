import { Url } from 'url';

export default interface ItemThumbnailProps {
  href: Url;
  brand?: string;
  ItemName: string;
  discountRate: number;
  minSellingPrice: number;
  originalPrice: number;
}
