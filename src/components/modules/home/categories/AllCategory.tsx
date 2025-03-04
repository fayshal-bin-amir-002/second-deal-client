import { ICategory } from "@/types";
import CategoryCard from "./CategoryCard";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AllCategory = ({ categories }: { categories: ICategory[] }) => {
  const filteredCategories = categories
    .slice(0, 6)
    ?.filter((category) => category.name !== "Others");

  const othersCategory = categories.find(
    (category) => category.name === "Others"
  );
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
      {filteredCategories.map((category) => (
        <CategoryCard key={category?._id} category={category} />
      ))}
      {othersCategory && (
        <CategoryCard key={othersCategory?._id} category={othersCategory} />
      )}
      <div className="hover:-translate-y-2 duration-300 h-[146px]">
        <Link href="/">
          <Card className="bg-orange-100 flex items-center flex-col h-full justify-center">
            <CardContent>
              <h3 className="text-xl font-semibold text-center flex items-center gap-1">
                View All <ArrowRight />
              </h3>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default AllCategory;
