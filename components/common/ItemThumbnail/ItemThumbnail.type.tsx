import { Url } from 'url';

export default interface ItemThumbnailProps {
  href?: string;
  brand?: string;
  itemName: string;
  imageUrl: string;
  discountRate: number;
  minSellingPrice: number;
  originalPrice: number;
}
