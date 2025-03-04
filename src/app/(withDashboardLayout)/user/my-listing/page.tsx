import UserListingManage from "@/components/modules/dashboard/user/listing";
import { getUserListingItems } from "@/services/listing";

const UserListingPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data, meta } = await getUserListingItems(page);
  return (
    <div>
      <UserListingManage items={data} meta={meta} />
    </div>
  );
};

export default UserListingPage;
