import Container from "@/components/shared/Container";
import SectionContainer from "@/components/shared/SectionContainer";
export const dynamic = "force-dynamic";

import SectionTitle from "@/components/shared/SectionTitle";
import { getAllAvailableListingItems } from "@/services/listing";
import { IListingItem } from "@/types";
import ProductCard from "../../product/product-card/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <div className="pt-8 md:pt-10 lg:pt-12 text-center">
          <Link href="/products">
            <Button>Explore All Products</Button>
          </Link>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default FeaturedProductsSection;
