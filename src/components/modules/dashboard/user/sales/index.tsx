"use client";

import SDPagination from "@/components/ui/core/SDPagination";
import { SDTable } from "@/components/ui/core/SDTable";
import { IErrorResponse, IMeta, ITransaction } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateTransactionStatus } from "@/services/transactions";
import { toast } from "sonner";

const UserSalesManage = ({
  data: transactions,
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
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.itemId.category.name}</span>,
    },
    {
      accessorKey: "buyerEmail",
      header: "Buyer Email",
      cell: ({ row }) => <span>{row.original.buyerId.email}</span>,
    },
    {
      accessorKey: "buyerPhone",
      header: "Buyer Phone",
      cell: ({ row }) => <span>{row.original.buyerId.phoneNumber}</span>,
    },
    {
      accessorKey: "buyerLocation",
      header: "Buyer Location",
      cell: ({ row }) => <span>{row.original.buyerId.location}</span>,
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => (
        <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
      ),
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
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <Select
          disabled={
            row.original.status === "Completed" ||
            row.original.status === "Canceled"
          }
          onValueChange={(e) => handleStatusChange(e, row.original._id)}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Change Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Completed">Approved</SelectItem>
              <SelectItem value="Canceled">Cancel</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
  ];

  const handleStatusChange = async (status: string, id: string) => {
    const data = {
      status: status,
    };
    try {
      const res = await updateTransactionStatus(id, data);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      const error = err as IErrorResponse;
      toast.error(error?.message);
    }
  };

  return (
    <div>
      <SDTable columns={columns} data={transactions || []} />
      {meta?.totalPage > 0 && <SDPagination totalPage={meta?.totalPage} />}
    </div>
  );
};

export default UserSalesManage;
