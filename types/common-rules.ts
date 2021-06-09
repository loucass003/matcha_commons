import { num, required, str } from "../validation";

const IDParamRule = required()
  .and(str.is())
  .and(num.parse())
  .and(num.is())
  .and(num.isInteger());

const IDRule = required().and(num.is()).and(num.isInteger());
const NumberRule = IDParamRule;
const PositiveNumberRule = NumberRule.and(num.min(0));

export { IDParamRule, IDRule, NumberRule, PositiveNumberRule };
