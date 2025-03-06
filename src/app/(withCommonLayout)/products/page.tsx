export const dynamic = "force-dynamic";

import AllProductsContainer from "@/components/modules/product/products-page";
import Container from "@/components/shared/Container";
import { getAllAvailableListingItems } from "@/services/listing";

type ISearchParams = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ProductsPage = async ({ searchParams }: ISearchParams) => {
  const query = await searchParams;
  const { data, meta } = await getAllAvailableListingItems(query);
  return (
    <Container>
      <div className="py-6 md:py-8 lg:py-12">
        <AllProductsContainer data={data} meta={meta} />
      </div>
    </Container>
  );
};

export default ProductsPage;
