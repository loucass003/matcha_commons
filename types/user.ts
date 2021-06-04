export interface IUser {
  id?: number;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  activated: boolean;
  likes?: IUser[];
}

export interface IUserSession {
  id: number;
  firstname: string;
}
