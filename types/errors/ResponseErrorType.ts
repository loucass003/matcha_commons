export enum ResponseErrorType {
  ValidationError,
  UserNotAuthenticated,
  UserAlreadyExist,
  UserNotFound,
  UserInvalidPassword,
  UserNotActivated,
  UserInvalidActivationToken,
  UserInvalidResetPasswordToken,
  UserNotInConversation,
  UserAlreadyActivated,
  ConversationNotFound,
  ConversationClosed,
}
