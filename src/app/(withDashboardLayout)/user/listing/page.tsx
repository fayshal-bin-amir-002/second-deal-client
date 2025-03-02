import UserListingManage from "@/components/modules/dashboard/user/listing";
import { getAllUserListingItems } from "@/services/listing";

const UserListingPage = async () => {
  const { data, meta } = await getAllUserListingItems();
  return (
    <div>
      <UserListingManage items={data} meta={meta} />
    </div>
  );
};

export default UserListingPage;
