import { z } from "zod";

export const loginFormSchema = z.object({
  credential: z
    .string({ required_error: "Email/Phone Number is required" })
    .trim()
    .min(1, "Email/Phone Number is required"),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password must be at least 6 characters long"),
});
