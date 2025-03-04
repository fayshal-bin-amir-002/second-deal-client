"use server";

import { IErrorResponse } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getUserPurchasesHistory = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/purchases?page=${page}`,
      {
        next: {
          tags: ["Purchases"],
        },
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        cache: "no-store",
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
          tags: ["Sales"],
        },
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        cache: "no-store",
      }
    );
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};

export const updateTransactionStatus = async (
  id: string,
  data: { status: string }
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(data),
      }
    );
    revalidateTag("Sales UserListings");
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};

export const getAllTransactionsHistory = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/transactions?page=${page}`,
      {
        next: {
          tags: ["Transactions"],
        },
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        cache: "force-cache",
      }
    );
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};
