import { CategoriesAPIType, ContItems } from 'apis/models/Categories.type';

export default interface CategoriesProps {
  data: {
    categoryInfo: CategoriesAPIType;
    tabInfo: ContItems[];
  };
}
