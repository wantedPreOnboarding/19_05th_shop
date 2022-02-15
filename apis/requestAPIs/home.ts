import requests from '../core';
import { MainCategories } from '../models/Home.type';
import { URL } from '../consts';

export const get = {
  mainCategories: requests.get<MainCategories>(URL.MAIN_CATEGORIES),
};
