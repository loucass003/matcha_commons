import { required, str } from "../../validation";

export interface ILoginPost {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

const loginPostSchema = {
  password: required().and(str.is()).and(str.password()),
  email: required().and(str.is()).and(str.email()),
};

export { loginPostSchema };
