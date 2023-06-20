import { useQuery } from "react-query";
import axios from "axios";

export const useGetAllProducts = () => {
  const context = useQuery("products", () => {
    return axios.get("http://localhost:4000/products");
  });
  return context;
};
