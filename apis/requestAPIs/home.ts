import requests from '../core';
import { MainCategories } from '../models/Home.type';
import { URL_MAIN_CATEGORIES } from '../consts';

export const get = {
  mainCategories: (): Promise<MainCategories> => requests.get(URL_MAIN_CATEGORIES),
};
