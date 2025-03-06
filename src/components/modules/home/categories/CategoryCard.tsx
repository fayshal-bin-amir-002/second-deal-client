import { Card, CardContent } from "@/components/ui/card";
import { ICategory } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <div className="hover:-translate-y-2 duration-300">
      <Link href={`/products?category=${category?._id}`}>
        <Card className="w-full h-full flex flex-col">
          <CardContent className="flex flex-col items-center justify-between h-full">
            <div className="flex-shrink-0 mb-2">
              <Image
                src={category?.image}
                alt={category?.name}
                width={60}
                height={100}
                className="mx-auto"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center flex-grow flex items-end text-gray-600">
              {category?.name}
            </h3>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default CategoryCard;
