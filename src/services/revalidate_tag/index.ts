"use server";
import { revalidateTag } from "next/cache";

export const revalidateTags = async (tags: string[]) => {
  tags?.forEach((tag) => revalidateTag(tag));
};
