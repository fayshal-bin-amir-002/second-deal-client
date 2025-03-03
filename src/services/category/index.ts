"use server";

import { IErrorResponse } from "@/types";

export const getAllCategory = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      next: {
        tags: ["Category"],
      },
      cache: "force-cache",
    });
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};
