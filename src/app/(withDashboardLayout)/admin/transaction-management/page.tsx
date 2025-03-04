import TransactionsManagement from "@/components/modules/dashboard/admin/transactions";
import { getAllTransactionsHistory } from "@/services/transactions";

const TransactionManagementPage = async () => {
  const { data, meta } = await getAllTransactionsHistory();
  return (
    <div>
      <TransactionsManagement data={data} meta={meta} />
    </div>
  );
};

export default TransactionManagementPage;
