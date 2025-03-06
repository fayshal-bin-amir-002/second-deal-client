import { IAdminDashboardStats } from "@/types";
import StatusCard from "./StatusCard";
import UsersActiveStatusChart from "./UsersActiveStatusChart";
import TransactionStatusChart from "./TransactionStatusChart";

const AdminDashboardManagement = ({ data }: { data: IAdminDashboardStats }) => {
  return (
    <div className="pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatusCard name="Total Products" count={data?.totalListingProduct} />
        <StatusCard name="Total Users" count={data?.totalUser} />
        <StatusCard name="Active Users" count={data?.totalActiveUser} />
        <StatusCard name="Blocked Users" count={data?.totalBlockedUser} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <UsersActiveStatusChart
          activeUser={data?.totalActiveUser}
          blockedUser={data?.totalBlockedUser}
        />
        <TransactionStatusChart data={data?.totalTransactions} />
      </div>
    </div>
  );
};

export default AdminDashboardManagement;
