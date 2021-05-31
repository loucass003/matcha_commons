import { required, str } from "../../validation";
import { ILoginResponse } from "./login";

export interface IActivatePost {
  activationToken: string;
}

export type IActivateResponse = ILoginResponse;

const activationPostSchema = {
  activationToken: required().and(str.is()),
};

export { activationPostSchema };
