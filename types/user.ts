export interface IUser {
  id?: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  activated: boolean;
}

export interface IUserSession {
  id: number;
  firstname: string;
}
