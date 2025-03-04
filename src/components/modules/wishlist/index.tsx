"use client";

import NoDataFound from "@/components/shared/NoDataFound";
import { Button } from "@/components/ui/button";
import {
  clearWishlist,
  wishlistSelector,
} from "@/redux/features/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import WishlistCard from "./WishlistCard";

const WishlistsManagement = () => {
  const dispatch = useAppDispatch();
  const wishlists = useAppSelector(wishlistSelector);

  return (
    <div className="py-6 md:py-8 lg:py-10">
      <div className="mb-6 md:mb-8 flex justify-between items-center">
        <h3 className="text-2xl md:text-4xl font-medium">My WishList</h3>
        <Button
          className="bg-red-500"
          onClick={() => dispatch(clearWishlist())}
        >
          Clear Wishlist
        </Button>
      </div>
      {wishlists?.length > 0 ? (
        <div className="space-y-6">
          {wishlists?.map((wishlist) => (
            <WishlistCard key={wishlist?._id} wishlist={wishlist} />
          ))}
        </div>
      ) : (
        <NoDataFound name="Wishlist item" />
      )}
    </div>
  );
};

export default WishlistsManagement;
