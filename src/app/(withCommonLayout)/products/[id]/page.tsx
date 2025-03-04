import ProductDetials from "@/components/modules/product/product-details";
import Container from "@/components/shared/Container";
import { getASingleProduct } from "@/services/listing";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const { data } = await getASingleProduct(id);

  return (
    <Container>
      <ProductDetials product={data} />
    </Container>
  );
};

export default ProductDetailsPage;
