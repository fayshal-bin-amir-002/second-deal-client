import Container from "@/components/shared/Container";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionTitle from "@/components/shared/SectionTitle";
import { getAllAvailableListingItems } from "@/services/listing";
import { IListingItem } from "@/types";
import ProductCard from "../../product/proudct-card/ProductCard";

const FeaturedProductsSection = async () => {
  const { data } = await getAllAvailableListingItems();
  return (
    <SectionContainer>
      <Container>
        <SectionTitle title="Featured Products" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {data &&
            data
              ?.slice(0, 6)
              ?.map((product: IListingItem) => (
                <ProductCard key={product?._id} product={product} />
              ))}
        </div>
      </Container>
    </SectionContainer>
  );
};

export default FeaturedProductsSection;
