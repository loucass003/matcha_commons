import { num, required, str } from "../validation";

const IDRule = required()
  .and(str.is())
  .and(num.parse())
  .and(num.is())
  .and(num.isInteger());

export { IDRule };
