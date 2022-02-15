import requests from '../core';
import ItemsAPIType from '../models/Items.type';
import { URL } from '../consts';
import slugMatcher from 'apis/utils/slugMatcher';

export const get = {
  items: (conItemId: string) => requests.get<ItemsAPIType>(slugMatcher(URL.ITEMS, [conItemId])),
};
