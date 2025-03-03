import UpdateProductForm from "@/components/modules/dashboard/user/listing/UpdateProductForm";
import { getASingleProduct } from "@/services/listing";

const UserProductUpdatePage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
  const { data } = await getASingleProduct(productId);
  return (
    <div className="pb-6">
      <UpdateProductForm item={data} />
    </div>
  );
};

export default UserProductUpdatePage;
