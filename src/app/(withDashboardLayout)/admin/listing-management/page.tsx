import ListingManagement from "@/components/modules/dashboard/admin/listing";
import { getAllListingItems } from "@/services/listing";

const ListingManagementPage = async () => {
  const { data, meta } = await getAllListingItems();
  return (
    <div className="pb-6">
      <ListingManagement items={data} meta={meta} />
    </div>
  );
};

export default ListingManagementPage;
