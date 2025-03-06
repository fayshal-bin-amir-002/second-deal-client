export const dynamic = "force-dynamic";

import Container from "@/components/shared/Container";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { getAllCategory } from "@/services/category";
import AllCategory from "./AllCategory";

const CategorySection = async () => {
  const { data: categories = [] } = await getAllCategory();

  return (
    <SectionContainer>
      <Container>
        <SectionTitle title="Category" />
        <AllCategory categories={categories} />
      </Container>
    </SectionContainer>
  );
};

export default CategorySection;
