import { ContItems, ConCategory2s } from 'apis/models/Categories.type';

export default interface CategoryProps {
  item: ConCategory2s;
  page: 'categories' | 'brands';
}
