"use server";

import { IErrorResponse, IProduct } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { revalidateTags } from "../revalidate_tag";

export const getAllListingItems = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      next: {
        tags: ["Listing"],
      },
      cache: "force-cache",
    });
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};

export const getAllAvailableListingItems = async (query?: {
  [key: string]: string | string[] | undefined;
}) => {
  const params = new URLSearchParams();
  if (query?.page) {
    params.append("page", query?.page?.toString());
  }
  if (query?.category) {
    params.append("category", query?.category?.toString());
  }
  if (query?.location) {
    params.append("location", query?.location?.toString());
  }
  if (query?.condition) {
    params.append("condition", query?.condition?.toString());
  }
  if (query?.searchTerm) {
    params.append("searchTerm", query?.searchTerm?.toString());
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/available-items?${params}`,
      {
        next: {
          tags: ["AvailableListing"],
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

export const getUserListingItems = async (page?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/my-listing?page=${page}`,
      {
        next: {
          tags: ["UserListings"],
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

export const addProductToList = async (data: IProduct) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      body: JSON.stringify(data),
    });
    await revalidateTags(["UserListings", "AvailableListing"]);
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};

export const getASingleProduct = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        next: {
          tags: ["SingleProduct"],
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

export const updateListingProduct = async (id: string, data: IProduct) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: JSON.stringify(data),
      }
    );
    await revalidateTags(["UserListings", "AvailableListing"]);
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};

export const deleteUserProduct = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    await revalidateTags(["UserListings", "AvailableListing"]);
    return await res.json();
  } catch (err) {
    const error = err as IErrorResponse;
    throw new Error(error?.message);
  }
};
