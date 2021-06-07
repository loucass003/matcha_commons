import { num, required, str } from "../validation";

const IDParamRule = required()
  .and(str.is())
  .and(num.parse())
  .and(num.is())
  .and(num.isInteger());

const IDRule = required().and(num.is()).and(num.isInteger());

export { IDParamRule, IDRule };
