import requests from '../core';
import { MainCategoriesType, ConItemsType } from '../models/Home.type';
import { URL_MAIN_CATEGORIES, URL_DISCOUNT_ITEM } from '../consts';

export const get = {
  mainCategories: (): Promise<MainCategoriesType> => requests.get(URL_MAIN_CATEGORIES),
  discountItems: (): Promise<ConItemsType> => requests.get(URL_DISCOUNT_ITEM),
};
