export interface IUser {
  userId: string;
  isActive: boolean;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
}
