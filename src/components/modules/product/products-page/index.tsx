"use client";

import { IListingItem, IMeta } from "@/types";
import ProductCard from "../product-card/ProductCard";
import FilterProductSheet from "./FilterProductSheet";
import SDPagination from "@/components/ui/core/SDPagination";
import NoDataFound from "@/components/shared/NoDataFound";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import debounce from "@/utils/debounce";

const AllProductsContainer = ({
  data,
  meta,
}: {
  data: IListingItem[];
  meta: IMeta;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(query, value.toString());

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const debouncedSearch = useCallback(debounce(handleSearchQuery, 500), []);

  return (
    <div>
      <div className="text-left mb-6 md:mb-8 flex items-center justify-between gap-3">
        <FilterProductSheet />
        <Input
          name="search"
          type="search"
          className="max-w-xs"
          placeholder="Search product..."
          defaultValue=""
          onChange={(e) => debouncedSearch("searchTerm", e.target?.value)}
        />
      </div>
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      {data?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
