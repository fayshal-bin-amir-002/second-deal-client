import { Card, CardContent } from "@/components/ui/card";
import { ICategory } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }: { category: ICategory }) => {
  return (
    <div className="hover:-translate-y-2 duration-300">
      <Link href="/">
        <Card>
          <CardContent className="flex flex-col items-center justify-center">
            <div>
              <Image
                src={category?.image}
                alt={category?.name}
                width={80}
                height={200}
                className="mx-auto mb-2"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-center">
              {category?.name}
            </h3>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default CategoryCard;
