import CategoryCard from "@/components/modules/home/categories/CategoryCard";
import Container from "@/components/shared/Container";
import { getAllCategory } from "@/services/category";
import { ICategory } from "@/types";

const CategoriesPage = async () => {
  const { data: categories } = await getAllCategory();
  const filteredCategories = categories.filter(
    (category: ICategory) => category.name !== "Others"
  );

  const othersCategory = categories.find(
    (category: ICategory) => category.name === "Others"
  );
  return (
    <Container>
      <div className="py-6 md:py-8 lg:py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {filteredCategories.map((category: ICategory) => (
          <CategoryCard key={category?._id} category={category} />
        ))}
        {othersCategory && (
          <CategoryCard key={othersCategory?._id} category={othersCategory} />
        )}
      </div>
    </Container>
  );
};

export default CategoriesPage;
