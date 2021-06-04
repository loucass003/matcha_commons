export enum ResponseErrorType {
  ValidationError,
  UserNotAuthenticated,
  UserAlreadyExist,
  UserNotFound,
  UserInvalidPassword,
  UserNotActivated,
  UserInvalidActivationToken,
  UserInvalidResetPasswordToken,
  UserAlreadyActivated,
  MatchNotFound,
}
