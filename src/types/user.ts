export interface IUser {
  userId: string;
  isActive: boolean;
  rol: "user" | "admin";
  iat?: number;
  exp?: number;
}
