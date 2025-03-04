import { Locations } from "@/components/modules/auth/register/registerValidation";

export interface IUser {
  userId: string;
  isActive: boolean;
  role: "user" | "admin";
  iat?: number;
  exp?: number;
}

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

export interface IUserInfo {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: Locations;
  role: UserRole;
  isActive: boolean;
}
