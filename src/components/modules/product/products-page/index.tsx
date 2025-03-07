"use client";

import { IListingItem, IMeta } from "@/types";
import ProductCard from "../product-card/ProductCard";
import FilterProductSheet from "./FilterProductSheet";
import SDPagination from "@/components/ui/core/SDPagination";
import NoDataFound from "@/components/shared/NoDataFound";
import { Suspense } from "react";
import LoadingSpinner from "@/app/loading";

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
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data &&
            data?.map((product: IListingItem) => (
              <ProductCard key={product?._id} product={product} />
            ))}
        </div>
      ) : (
        <NoDataFound name="Products" />
      )}
      {/* </Suspense> */}
      {meta?.totalPage > 0 && (
        <div>
          <SDPagination totalPage={meta?.totalPage} />
        </div>
      )}
    </div>
  );
};

export default AllProductsContainer;
