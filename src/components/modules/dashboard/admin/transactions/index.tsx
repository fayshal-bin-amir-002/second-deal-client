"use client";

import SDPagination from "@/components/ui/core/SDPagination";
import { SDTable } from "@/components/ui/core/SDTable";
import { IMeta, ITransaction } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

const TransactionsManagement = ({
  data,
  meta,
}: {
  data: ITransaction[];
  meta: IMeta;
}) => {
  const columns: ColumnDef<ITransaction>[] = [
    {
      accessorKey: "title",
      header: "Product Title",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.itemId.images[0]}
            alt={row.original.itemId.title}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.itemId.title}</span>
        </div>
      ),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>{row.original.itemId.price}$</span>,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.itemId.category.name}</span>,
    },
    {
      accessorKey: "sellerEmail",
      header: "Seller Email",
      cell: ({ row }) => <span>{row.original.sellerId.email}</span>,
    },
    {
      accessorKey: "buyerEmail",
      header: "Buyer Email",
      cell: ({ row }) => <span>{row.original.buyerId.email}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span
          className={`${
            row.original.status === "Pending" && "text-orange-400"
          } ${row.original.status === "Completed" && "text-green-400"} ${
            row.original.status === "Canceled" && "text-red-400"
          }`}
        >
          {row.original.status}
        </span>
      ),
    },
  ];
  return (
    <div>
      <SDTable data={data || []} columns={columns} />
      {meta?.totalPage > 0 && <SDPagination totalPage={meta?.totalPage} />}
    </div>
  );
};

export default TransactionsManagement;
