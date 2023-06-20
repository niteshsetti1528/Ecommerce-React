import axios, { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "https://5ff0-183-83-171-4.ngrok-free.app/api",
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
