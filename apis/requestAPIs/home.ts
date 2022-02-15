import requests from '../core';
import { ConItemsType, MainCategoriesType } from '../models/Home.type';
import { URL } from '../consts';

export const get = {
  mainCategories: requests.get<MainCategoriesType>(URL.MAIN_CATEGORIES),
  discountItems: requests.get<ConItemsType>(URL.DISCOUNT_ITEM),
};
