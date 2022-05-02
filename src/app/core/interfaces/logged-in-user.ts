export interface LoggedInUser {
  id?: number;
  name: string;
  email: string;
  loggedIn: boolean;
}

export interface Login {
  username: string,
  password: string
}
