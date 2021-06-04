import { obj, optional, required, str } from "../../validation";
import { ILoginResponse } from "./login";

export interface IPasswordResetData {
  token: string;
  password: string;
}

export interface IPasswordResetPost {
  email?: string;
  reset?: IPasswordResetData;
}

export type IPasswordResetResponse = ILoginResponse;

const emailRules = required().and(str.is()).and(str.email());
const passwordRules = required().and(str.is()).and(str.password());

const passwordResetSchema = obj.xor(["email", "reset"]).and(
  obj.keys(
    {
      email: optional().and(str.is()).and(str.email()),
      reset: obj.keys({
        token: required().and(str.is()),
        password: passwordRules,
      }),
    },
    { missing: ["email", "reset"] }
  )
);

export { passwordResetSchema, emailRules, passwordRules };
