import { z } from "zod";

export const productValidation = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .trim()
    .min(1, "Title is required"),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, "Description must be at least 10 characters long"),
  price: z
    .string({ required_error: "Price is required" })
    .min(1, "Price is required"),
  condition: z.enum(["New", "Used"], {
    message: "Condition is required",
  }),
  category: z
    .string({ required_error: "Category is required" })
    .min(1, "Category is required"),
});
