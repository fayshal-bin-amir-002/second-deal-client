import { IErrorResponse } from "@/types";
import { cookies } from "next/headers";

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

export const getAllUserListingItems = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/listings/my-listing`,
      {
        next: {
          tags: ["MyListing"],
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
