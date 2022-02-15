import requests from './core';
import { MainCategoriesType } from 'apis/models/Home.type';
export const get = {
  categories: (): Promise<MainCategoriesType> => requests.get('/con-category1s'),
};
export const post = {};
