import axios from "axios";

const API_URL = "http://130.61.95.137";
export const request = async ({ url, method, data = {} }) => { 
  const response = await axios[method](`${API_URL}/${url}`, data);
  return response.data;
};
