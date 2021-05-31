import { obj, optional, required, str } from "../../validation";

export interface IPasswordResetData {
  token: string;
  password: string;
}

export interface IPasswordResetPost {
  email?: string;
  reset?: IPasswordResetData;
}

const passwordResetSchema = obj.xor(["email", "reset"]).and(
  obj.keys(
    {
      email: optional().and(str.is()).and(str.email()),
      reset: obj.keys({
        token: required().and(str.is()),
        password: required().and(str.is()).and(str.password()),
      }),
    },
    { missing: ["email", "reset"] }
  )
);

export { passwordResetSchema };
