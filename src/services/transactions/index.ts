import { IErrorResponse } from "@/types";
import { cookies } from "next/headers";

export const getUserPurchasesHistory = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases?page=${page}`,
      {
        next: {
          tags: ["Purchases"],
        },
        cache: "force-cache",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};

export const getUserSalesHistory = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/sales?page=${page}`,
      {
        next: {
          tags: ["Purchases"],
        },
        cache: "force-cache",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};
