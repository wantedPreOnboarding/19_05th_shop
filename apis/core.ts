import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';

const instance = axios.create({
  baseURL: process.env.API_URL,
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get:
    <T>(defaultUrl: string) =>
    (url = defaultUrl) =>
      instance.get<any, AxiosResponse<T>, any>(url).then(responseBody),
};

export default requests;
