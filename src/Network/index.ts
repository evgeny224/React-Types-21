import axios, { AxiosRequestConfig } from "axios";

export const makeRequest = async ({
  url,
  method = "GET",
  data = {},
  params = {},
}: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
      baseURL: "https://jsonplaceholder.typicode.com/",
      timeout: 10000,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const makeUpdate = async ({
  url,
  method = "PUT",
  data = {},
  params = {},
}: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
      baseURL: "https://jsonplaceholder.typicode.com/",
      timeout: 10000,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
