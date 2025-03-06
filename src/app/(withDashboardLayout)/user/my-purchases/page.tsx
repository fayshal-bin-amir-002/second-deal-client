export const dynamic = "force-dynamic";

import UserPurchasesManage from "@/components/modules/dashboard/user/purchases";
import { getUserPurchasesHistory } from "@/services/transactions";

const UserPurchasesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page } = await searchParams;
  const { data, meta } = await getUserPurchasesHistory(page);
  return (
    <div>
      <UserPurchasesManage transactions={data} meta={meta} />
    </div>
  );
};

export default UserPurchasesPage;
