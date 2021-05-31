import { required, str } from "../../validation";

export interface IRegisterPost {
  firstname: string;
  lastname: string;
  password: string;
  email: string;
}

export interface IRegisterResponse {
  /** id of the registered user */
  id: number;
}

const registerPostSchema = {
  firstname: required()
    .and(str.is())
    .and(
      str.length(1, 30).withMessage("firstname length must be between 1 and 30")
    ),
  lastname: required()
    .and(str.is())
    .and(
      str.length(1, 30).withMessage("lastname length must be between 1 and 30")
    ),
  password: required()
    .and(str.is())
    .and(str.password().withMessage("password is invalid")),
  email: required()
    .and(str.is())
    .and(str.email().withMessage("email is invalid")),
};

export { registerPostSchema };
