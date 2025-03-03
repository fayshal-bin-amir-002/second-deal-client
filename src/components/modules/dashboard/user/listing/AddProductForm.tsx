"use client";

import { ICategory, IProduct } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { IErrorResponse } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getAllCategory } from "@/services/category";
import SDImageUploader from "@/components/ui/core/SDImageUploader";
import SDImagePreviewer from "@/components/ui/core/SDImageUploader/SDImagePreviewer";
import { productValidation } from "./productValidation";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { addProductToList } from "@/services/listing";

const AddProductForm = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const [categories, setCategories] = useState<ICategory[] | []>([]);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(productValidation),
  });

  const {
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllCategory();

      setCategories(data);
    };

    fetchData();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (imageFiles.length > 3) {
      toast.error("You can't upload more than 3 images.");
      return;
    } else if (imageFiles.length === 0) {
      toast.error("Please select at least one image.");
      return;
    }

    const images: string[] = [];

    imageFiles.map(async (imageFile) => {
      const image = await uploadToCloudinary(imageFile);
      images.push(image as string);
    });

    const productData = {
      ...data,
      price: Number(data?.price),
      images,
    };
    try {
      const res = await addProductToList(productData as IProduct);
      if (res?.success) {
        toast.success(res?.message);

        router.push("/user/listing");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      const error = err as IErrorResponse;
      toast.error(error?.message);
    }
  };

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Sell Your Product</h1>
                <p className="text-balance text-muted-foreground">
                  Fill up all the fields.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="title">Product Title</Label>
                      <FormControl>
                        <Input
                          id="title"
                          type="text"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="price">Price</Label>
                      <FormControl>
                        <Input
                          id="price"
                          type="number"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <FormField
                  control={form.control}
                  name="condition"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="condition">Condition</Label>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger id="condition">
                            <SelectValue placeholder="Select product condition" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent id="condition">
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Used">Used</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="category">Category</Label>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select product category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent id="location">
                          {categories.map((category: ICategory) => (
                            <SelectItem
                              key={category?._id}
                              value={category?._id}
                            >
                              {category?.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="description">Product Description</Label>
                      <FormControl>
                        <Textarea
                          id="description"
                          className="resize-none h-24"
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
                <Button type="submit" className="w-32" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="animate-spin" />}
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AddProductForm;
