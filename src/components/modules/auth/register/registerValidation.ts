import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }).trim(),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("A valid email is required"),
  phoneNumber: z.string().trim().min(11, "Phone number must be 11 digits"),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, "Password must be at least 6 characters long"),
  location: z.string({ required_error: "Location is required" }).trim(),
});
