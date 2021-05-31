import { TransferNullability } from "./types";
import { ValidationError } from "./ValidationError";

export function allow<I, X>(bool: (value: I) => boolean, failure: string) {
  return (doAllow: I, message?: string): TransferNullability<I, X> => {
    if (undefined === doAllow || doAllow === null || bool(doAllow)) {
      return doAllow as any;
    }
    throw new ValidationError(message || failure, doAllow);
  };
}
