"use client";

import { SDTable } from "@/components/ui/core/SDTable";
import { ICategory, IErrorResponse } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import SDImageUploader from "@/components/ui/core/SDImageUploader";
import SDImagePreviewer from "@/components/ui/core/SDImageUploader/SDImagePreviewer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { toast } from "sonner";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { Category, createCategory } from "@/services/category";

const CategoryManagement = ({ data }: { data: ICategory[] }) => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [openModal, setOpenModal] = useState(false);
  const form = useForm({
    resolver: zodResolver(
      z.object({
        name: z
          .string({ required_error: "Category name is required" })
          .trim()
          .min(1, "Category name is required"),
      })
    ),
  });

  const {
    formState: { isSubmitting },
  } = form;
  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "image",
      header: "Category Image",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.image}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded"
          />
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Category Name",
      cell: ({ row }) => <span>{row.original.name}</span>,
    },
  ];

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (imageFiles.length === 0 || imageFiles.length > 1) {
      toast.error("Please select or upload only one image for the category.");
      return;
    }
    try {
      const image = await uploadToCloudinary(imageFiles[0]);
      const categoryData = {
        ...data,
        image: image || "",
      };
      const res = await createCategory(categoryData as Category);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      const error = err as IErrorResponse;
      toast.error(error?.message);
    } finally {
      setOpenModal(false);
      form.reset();
      setImageFiles([]);
      setImagePreview([]);
    }
  };

  return (
    <div>
      <div className="pb-4 flex justify-end">
        <Dialog open={openModal} onOpenChange={setOpenModal}>
          <DialogTrigger asChild>
            <Button variant="outline">Add New Category</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="name">Category Name</Label>
                          <FormControl>
                            <Input
                              id="name"
                              type="text"
                              {...field}
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <Label className="pb-2">Upload Product Image</Label>
                    <div className="flex flex-wrap gap-4 ">
                      <SDImageUploader
                        setImageFiles={setImageFiles}
                        setImagePreview={setImagePreview}
                        label="Upload Image"
                        className=""
                      />
                      <SDImagePreviewer
                        className="flex flex-wrap gap-4"
                        setImageFiles={setImageFiles}
                        imagePreview={imagePreview}
                        setImagePreview={setImagePreview}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <Button
                      type="submit"
                      className="w-32"
                      disabled={isSubmitting}
                    >
                      {isSubmitting && <Loader2 className="animate-spin" />}
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      <SDTable columns={columns} data={data || []} />
    </div>
  );
};

export default CategoryManagement;
