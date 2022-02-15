import requests from '../core';
import { BrandsAPIType } from '../models/Brands.type';

export const get = {
  brands: (conCategory1Id: string) =>
    requests.get<BrandsAPIType>(`/con-category1s/${conCategory1Id}/nested`),
};
