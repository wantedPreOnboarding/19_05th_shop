import { ConCategory2s, ContItems } from 'apis/models/Categories.type';

export default interface CategoriesProps {
  name: string;
  data: ConCategory2s[];
  tab: ContItems[];
}
