import { Validator } from "./Validator";

export function wrap<I, X>(
  name: string,
  func: (value: I, message?: string) => X
): Validator<I, X> {
  const container = {
    [name]: (value: I, message?: string) => func(value, message),
  };

  const validatorFunction: any = container[name];

  const v = Object.assign(validatorFunction, {
    and: <B>(validator: Validator<X, B>): Validator<I, B> =>
      wrap<I, B>(`${name}.and(${validator.name})`, (value, message) =>
        validator(validatorFunction(value, message))
      ),
  });

  v.withMessage = (message: string): Validator<I, X> => {
    v.message = message;
    return wrap<I, X>(`${v.name}.withMessage(${v.message})`, (value) =>
      v(validatorFunction(value, message))
    );
  };

  return v;
}
