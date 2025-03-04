export const dynamic = "force-dynamic";

import UserSalesManage from "@/components/modules/dashboard/user/sales";
import { getUserSalesHistory } from "@/services/transactions";

const UserSalesPage = async () => {
  const { data, meta } = await getUserSalesHistory();
  return (
    <div>
      <UserSalesManage data={data} meta={meta} />
    </div>
  );
};

export default UserSalesPage;
