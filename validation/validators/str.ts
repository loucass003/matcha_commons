import { allow } from "../allow";
import { transform } from "../transform";
import { ValidationError } from "../ValidationError";
import { Validator } from "../Validator";
import { wrap } from "../wrap";

/**
 * Check that the value is of the `string` type. It accepts empty strings as well.
 */
export const is = <X>() =>
  wrap(
    "str.is",
    allow<X, string>(
      (value) => typeof value === "string",
      "value is not string"
    )
  );

/**
 * Check that the value is of the `string` type and non-empty.
 */
export const nonempty = <X>() =>
  wrap(
    "str.nonempty",
    allow<X, string>(
      (value) => typeof value === "string" && !!value,
      "value is a empty string"
    )
  );

/**
 * Check tha the string-based value has length at least `min`.
 */
export const min = <X extends string, N extends number>(m: N) =>
  wrap(
    "str.min",
    allow<X, string>(
      (value) => value.length >= m,
      `value.length is lower than ${m}`
    )
  );

/**
 * Check that the string-based value has length at most `max`.
 */
export const max = <X extends string, N extends number>(m: N) =>
  wrap(
    "str.max",
    allow<X, string>(
      (value) => value.length <= m,
      `value.length is greater than ${m}`
    )
  );

/**
 * Check that the string-based value has length in the closed range of `[start, end]`.
 */
export const length = <X extends string, L extends number, H extends number>(
  start: L,
  end: H
) =>
  wrap(
    "str.length",
    allow<X, string>(
      (value) => value.length >= start && value.length <= end,
      `value.length is out of bounds [${start}, ${end}]`
    )
  );

/**
 * Check that the string-based value matches a regular expression pattern. Optionally,
 * it may do a replacement (like {@link String#replace}) based on that pattern.
 *
 * If the pattern does not match, the replacement is not carried out.
 *
 * @param pattern the pattern to match and optionally replace
 * @param replace the optional replacement string for the matching pattern
 */
export const regex = <X extends string>(pattern: RegExp, replace?: string) =>
  wrap(
    "str.regex",
    transform<X, string>((value) => {
      if (replace) {
        if (!value.match(pattern)) {
          throw new ValidationError(`value does not match ${pattern}`, value);
        }

        return value.replace(pattern, replace);
      }

      if (!value.match(pattern)) {
        throw new ValidationError(`value does not match ${pattern}`, value);
      }

      return value;
    })
  );

/**
 * Transform a string-based value into an upper case string via {@link String#toUpperCase}.
 */
export const upper = <X extends string>() =>
  wrap(
    "str.upper",
    transform<X, string>((value: string) => value.toUpperCase())
  );

/**
 * Check that the string-based value is equals to the `test` value.
 */
export const equals = (test: string) =>
  wrap(
    "str.equals",
    allow<string, string>((value) => value === test, "value is not equal")
  );

/**
 * Check that the string-based value is a valid email.
 */
export const email = (): Validator<string, string> =>
  wrap(
    "str.email",
    allow<string, string>(
      (value) =>
        !!value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      "value is not a valid email"
    )
  );

/**
 * Check that the string-based value is a valid password.
 */
export const password = (
  minLength = 8,
  mustHaveNumber = true,
  mustHaveLetter = true
): Validator<string, string> =>
  wrap("str.password", (value, message?: string) => {
    const reasons: ValidationError[] = [];

    if (value.length < minLength)
      reasons.push(
        new ValidationError(`password length is less than ${minLength}`, value)
      );
    if (mustHaveNumber && !value.match(/[0-9]+/))
      reasons.push(
        new ValidationError(`password must include at least one number`, value)
      );
    if (mustHaveLetter && !value.match(/[a-zA-Z]+/))
      reasons.push(
        new ValidationError(`password must include at least one letter`, value)
      );
    if (reasons.length > 0) {
      throw new ValidationError(
        message || "value is an invalid password",
        value,
        reasons
      );
    }
    return value;
  });
