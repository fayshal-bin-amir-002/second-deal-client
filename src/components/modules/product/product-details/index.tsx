"use client";

import { IErrorResponse, IListingItem } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, MessageSquare, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { buyAProduct } from "@/services/transactions";

const ProductDetials = ({ product }: { product: IListingItem }) => {
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="py-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl md:text-4xl font-semibold">Product Details</h3>
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft />
          Go Back
        </Button>
      </div>
      <div className="bg-gray-50 rounded-xl shadow-2xl">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap -mx-4 items-center">
            {/* Product Images */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <Image
                src={mainImage}
                alt={product?.title}
                width={500}
                height={200}
                className="rounded-lg mb-4 w-full h-[300px] sm:h-[400px] object-contain p-4"
              />
              <div className="flex justify-center gap-4 overflow-x-auto">
                {product?.images?.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    width={300}
                    height={200}
                    alt={`Thumbnail ${index + 1}`}
                    className="size-20 sm:size-28 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300 border"
                    onClick={() => setMainImage(src)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4 h-full">
              <div>
                <h2 className="text-3xl font-bold flex flex-col sm:flex-row mb-4 items-start md:items-center gap-2">
                  {product?.title}{" "}
                  <span className="flex gap-2 items-center">
                    <Badge>{product?.condition}</Badge>{" "}
                    <Badge>{product?.category?.name}</Badge>
                  </span>
                </h2>
                <p className="text-gray-600 mb-4">
                  Seller - {product?.userId.name} |
                  <small>
                    {new Date(product?.createdAt).toLocaleDateString()}
                  </small>
                </p>
                <div className="mb-4">
                  <span className="text-2xl font-bold mr-2">
                    ${product?.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 text-justify">
                  {product?.description}
                </p>
                <div>
                  <p className="text-gray-600">
                    Location:{" "}
                    <span className="font-medium">
                      {product?.userId?.location}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-8 lg:mt-10 flex flex-col-reverse lg:flex-row gap-4 md:gap-2">
                <div>
                  <Button
                    className="w-full lg:w-auto"
                    onClick={() => handleOrder(product?._id)}
                    disabled={isLoading}
                  >
                    {isLoading && <Loader2 className="animate-spin" />}
                    Buy Now
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    Add to Wishlist <ShoppingBag />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      toast.warning("This feature is not available right now.");
                    }}
                  >
                    Contact Seller <MessageSquare />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetials;
