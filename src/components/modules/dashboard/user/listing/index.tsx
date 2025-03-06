"use client";

import { Button } from "@/components/ui/button";
import SDPagination from "@/components/ui/core/SDPagination";
import { SDTable } from "@/components/ui/core/SDTable";
import { IErrorResponse, IListingItem, IMeta } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ViewListItemModal from "../modal/ViewListItemModal";
import Swal from "sweetalert2";
import { deleteUserProduct } from "@/services/listing";

const UserListingManage = ({
  items,
  meta,
}: {
  items: IListingItem[];
  meta: IMeta;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IListingItem | null>(null);
  const router = useRouter();
  const handleView = (data: IListingItem) => {
    setModalOpen(true);
    setSelectedItem(data);
  };
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteUserProduct(id);
          if (res?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: res?.message,
            });
          }
        } catch (err) {
          const error = err as IErrorResponse;
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error?.message,
          });
        }
      }
    });
  };

  const columns: ColumnDef<IListingItem>[] = [
    {
      accessorKey: "title",
      header: "Product Title",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.images[0]}
            alt={row.original.title}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.title}</span>
        </div>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <span className="truncate">
          {row.original.description.slice(0, 30)}...
        </span>
      ),
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>{row.original.price}$</span>,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.category.name}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <span
          className={`${
            row.original.status === "Available" && "text-orange-400"
          } ${row.original.status === "Sold" && "text-green-400"}`}
        >
          {row.original.status}
        </span>
      ),
    },
    {
      accessorKey: "data",
      header: "Date",
      cell: ({ row }) => (
        <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
      ),
    },
    {
      accessorKey: "action",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-600 hover:text-blue-500 cursor-pointer"
            title="View"
            onClick={() => handleView(row.original)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-600 hover:text-green-500 cursor-pointer"
            title="Edit"
            onClick={() =>
              router.push(`/user/listing/update-product/${row.original._id}`)
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-600 hover:text-red-500 cursor-pointer"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="text-right pb-4">
        <Link href="/user/my-listing/add-product">
          <Button variant="outline">
            Add My Product <Plus />
          </Button>
        </Link>
      </div>
      <SDTable columns={columns} data={items || []} />
      {meta?.totalPage > 0 && <SDPagination totalPage={meta?.totalPage} />}
      {modalOpen && (
        <ViewListItemModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          data={selectedItem as IListingItem}
        />
      )}
    </div>
  );
};

export default UserListingManage;
