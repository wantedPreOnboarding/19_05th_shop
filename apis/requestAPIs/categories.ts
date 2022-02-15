import { URL } from 'apis/consts';
import slugMatcher from 'apis/utils/slugMatcher';
import requests from '../core';
import { CategoriesAPIType } from '../models/Categories.type';
import { MainCategoriesType } from '../models/Home.type';

export const get = {
  categories: (category1Id: string) =>
    requests.get<CategoriesAPIType>(slugMatcher(URL.BRAND_ITEM, [category1Id])),
  mainCategories: () => requests.get<MainCategoriesType>(URL.MAIN_CATEGORIES),
};
