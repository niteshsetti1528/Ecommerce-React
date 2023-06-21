import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { ProductInterface } from "../interface/ProductInterface";
import request from "../utils/axios-utils";

export const addProduct = (data: ProductInterface) => {
  return request({
    url: "/products",
    method: "post",
    data: data,
  });
};

export const useAddProduct = () => {
  return useMutation(addProduct);
};

export const useGetAllProducts = () => {
  const context = useQuery("products", () => {
    return axios.get("http://localhost:4000/products");
  });
  return context;
};
