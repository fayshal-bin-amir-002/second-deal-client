"use server";

import { IErrorResponse } from "@/types";
import { cookies } from "next/headers";

export const getMetaData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/meta-data`, {
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      cache: "force-cache",
    });
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};
