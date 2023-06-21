import axios, { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

const request = ({ ...options }) => {
  const onSuccess = (response: AxiosResponse) => response;
  const onError = (error: string) => {
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
export default request;
