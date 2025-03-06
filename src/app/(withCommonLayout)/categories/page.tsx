export const dynamic = "force-dynamic";

import CategoryCardsContainer from "@/components/modules/category";
import Container from "@/components/shared/Container";
import { getAllCategory } from "@/services/category";

const CategoriesPage = async () => {
  const { data } = await getAllCategory();

  return (
    <Container>
      <CategoryCardsContainer categories={data} />
    </Container>
  );
};

export default CategoriesPage;
