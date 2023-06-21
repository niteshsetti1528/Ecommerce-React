import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { User } from "../interface/UserInterface";
import request from "../utils/axios-utils";

const addUser = (user: User) => {
  console.log(`UD:${JSON.stringify(user)}`);
  return request({
    url: "/Users/addUser",
    method: "post",
    data: user,
  });
};

const loginUser = (user: User) => {
 // console.log(`UD:${JSON.stringify(user)}`);
  return request({
    url: "/Users/login",
    method: "post",
    data: user,
  });
};

export const UseAddUser = () => {
  return useMutation(addUser);
};

export const UserLogin = () => {
  return useMutation(loginUser);
};

export const UseGetUser = () => {
  return useQuery("get-users", () => {
    return axios.get("http://localhost:4000/users");
  });
};
