"use server";

import { IErrorResponse } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export interface Category {
  name: string;
  image: string;
}

export const getAllCategory = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      next: {
        tags: ["Category"],
      },
    });
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};

export const createCategory = async (data: Category) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify(data),
    });
    revalidateTag("Category");
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};
