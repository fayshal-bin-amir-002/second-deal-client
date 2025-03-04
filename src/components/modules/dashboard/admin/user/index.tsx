"use client";

import { Badge } from "@/components/ui/badge";
import SDPagination from "@/components/ui/core/SDPagination";
import { SDTable } from "@/components/ui/core/SDTable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { banAUser, unBanAUser } from "@/services/user";
import { IErrorResponse, IMeta, IUserInfo } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "sonner";

const UserManagement = ({
  users,
  meta,
}: {
  users: IUserInfo[];
  meta: IMeta;
}) => {
  const columns: ColumnDef<IUserInfo>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <span>{row.original.name}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
      cell: ({ row }) => <span>{row.original.phoneNumber}</span>,
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => <span>{row.original.location}</span>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => (
        <Badge
          className={`${
            row.original.role === "user" && "bg-green-600"
          } uppercase`}
        >
          {row.original.role}
        </Badge>
      ),
    },
    {
      accessorKey: "isActive",
      header: "Active",
      cell: ({ row }) => (
        <span
          className={`${
            row.original.isActive ? "text-green-600" : "text-red-600"
          } uppercase`}
        >
          {String(row.original.isActive)}
        </span>
      ),
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <Select
          disabled={row.original.role === "admin"}
          onValueChange={(e) => handleStatusChange(e, row.original._id)}
        >
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Take action" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="ban">Ban</SelectItem>
              <SelectItem value="unban">Unban</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
  ];

  const handleStatusChange = async (status: string, id: string) => {
    try {
      if (status === "ban") {
        const res = await banAUser(id);
        if (res?.success) {
          toast.success(res?.message);
        } else {
          toast.error(res?.message);
        }
      } else if (status === "unban") {
        const res = await unBanAUser(id);
        if (res?.success) {
          toast.success(res?.message);
        } else {
          toast.error(res?.message);
        }
      }
    } catch (err) {
      const error = err as IErrorResponse;
      toast.error(error?.message);
    }
  };

  return (
    <div>
      <SDTable data={users || []} columns={columns} />
      {meta?.totalPage > 0 && <SDPagination totalPage={meta?.totalPage} />}
    </div>
  );
};

export default UserManagement;
