import requests from '../core';
import { CategoriesAPIType } from '../models/Categories.type';

export const get = {
  categories: (category1Id: string) =>
    requests.get<CategoriesAPIType>(`/con-category1s/${category1Id}/nested`),
};
