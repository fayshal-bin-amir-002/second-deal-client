"use client";

import { IListingItem, IMeta } from "@/types";
import ProductCard from "../product-card/ProductCard";
import FilterProductSheet from "./FilterProductSheet";
import SDPagination from "@/components/ui/core/SDPagination";

const AllProductsContainer = ({
  data,
  meta,
}: {
  data: IListingItem[];
  meta: IMeta;
}) => {
  return (
    <div>
      <div className="text-left mb-6">
        <FilterProductSheet />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data &&
          data?.map((product: IListingItem) => (
            <ProductCard key={product?._id} product={product} />
          ))}
      </div>
      {meta?.totalPage && (
        <div>
          <SDPagination totalPage={meta?.totalPage} />
        </div>
      )}
    </div>
  );
};

export default AllProductsContainer;
