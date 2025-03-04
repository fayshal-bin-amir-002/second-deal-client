export const dynamic = "force-dynamic";

import UserManagement from "@/components/modules/dashboard/admin/user";
import { getAllUsers } from "@/services/user";

const UserManagementPage = async () => {
  const { data, meta } = await getAllUsers();
  return (
    <div className="pb-6">
      <UserManagement users={data} meta={meta} />
    </div>
  );
};

export default UserManagementPage;
