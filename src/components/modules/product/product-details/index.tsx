"use client";

import { IListingItem } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ProductDetials = ({ product }: { product: IListingItem }) => {
  const router = useRouter();
  console.log(product);
  return (
    <div>
      <div className="flex justify-between items-center py-6">
        <h3 className="text-2xl md:text-4xl font-semibold">Product Details</h3>
        <Button variant="outline" onClick={() => router.back()}>
          <ArrowLeft />
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ProductDetials;
