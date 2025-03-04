"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { removeFromWishlist } from "@/redux/features/wishlistSlice";
import { useAppDispatch } from "@/redux/hooks";
import { buyAProduct } from "@/services/transactions";
import { IErrorResponse, IListingItem } from "@/types";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const WishlistCard = ({ wishlist }: { wishlist: IListingItem }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleOrder = async (id: string) => {
    setIsLoading(true);
    const data = {
      itemId: id,
    };
    try {
      const res = await buyAProduct(data);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/user/my-purchases");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      const error = err as IErrorResponse;
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-16">
          <div className="lg:col-span-5 flex">
            <Image
              src={wishlist?.images[0]}
              alt={wishlist?.title}
              width={400}
              height={300}
              className="w-[400px] h-[350px] rounded-2xl mx-auto lg:mx-0 object-cover object-center bg-gray-50"
            />
          </div>
          <div className="lg:col-span-7 text-gray-600">
            <span className="flex gap-2 items-center mb-2">
              <Badge>{wishlist?.category?.name}</Badge>
              <Badge>{wishlist?.condition}</Badge>{" "}
            </span>
            <h3 className="text-xl font-medium mb-1">{wishlist?.title}</h3>
            <p className="mb-4">
              Seller - {wishlist?.userId?.name} |
              <small>
                {new Date(wishlist?.createdAt).toLocaleDateString()}
              </small>
            </p>
            <p className="text-sm text-justify mb-3">
              {wishlist?.description.slice(0, 300)}...
            </p>
            <p>
              Location:{" "}
              <span className="font-semibold">{wishlist?.location}</span>
            </p>
            <div className="flex items-center justify-end gap-4 mt-6 md:mt-10 lg:mt-16">
              <Button
                onClick={() => handleOrder(wishlist?._id)}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="animate-spin" />}
                Buy Now
              </Button>
              <Button
                variant="outline"
                className="border border-red-500 text-red-500"
                onClick={() => dispatch(removeFromWishlist(wishlist?._id))}
              >
                Remove Item
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WishlistCard;
