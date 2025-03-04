import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IListingItem } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: IListingItem }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-4 h-full flex flex-col justify-between group">
      <h3 className="text-gray-500 text-sm mb-4">
        Seller - <span className="font-medium">{product?.userId?.name}</span>
      </h3>
      <div>
        <Image
          src={product?.images[0]}
          alt={product?.title}
          className="rounded-lg h-[230px] object-cover object-center"
          width={500}
          height={400}
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="w-[70%]">
          <Badge>{product?.condition}</Badge>
          <h2 className="text-gray-500 font-medium group-hover:text-orange-400 duration-150 mt-1.5">
            {product?.title}
          </h2>
        </div>

        <Link href={`/products/${product?._id}`}>
          <Button variant="outline" size="icon" className="rounded-full">
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
