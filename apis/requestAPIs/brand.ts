import { URL } from 'apis/consts';
import slugMatcher from 'apis/utils/slugMatcher';
import requests from '../core';
import { BrandsAPIType } from '../models/Brands.type';

export const get = {
  brands: (conCategory1Id: string) =>
    requests.get<BrandsAPIType>(slugMatcher(URL.BRAND_ITEM, [conCategory1Id])),
};
