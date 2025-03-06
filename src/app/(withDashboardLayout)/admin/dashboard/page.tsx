export const dynamic = "force-dynamic";

import AdminDashboardManagement from "@/components/modules/dashboard/admin/dashboard";
import { getMetaData } from "@/services/meta";

const AdminDashboardPage = async () => {
  const data = await getMetaData();
  return (
    <div>
      <AdminDashboardManagement data={data} />
    </div>
  );
};

export default AdminDashboardPage;
