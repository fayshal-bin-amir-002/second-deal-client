export const dynamic = "force-dynamic";

import CategoryManagement from "@/components/modules/dashboard/admin/category";
import { getAllCategory } from "@/services/category";

const CategoryPage = async () => {
  const { data } = await getAllCategory();
  return (
    <div className="pb-6">
      <CategoryManagement data={data} />
    </div>
  );
};

export default CategoryPage;
