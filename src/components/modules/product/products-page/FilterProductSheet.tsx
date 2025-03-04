"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Locations } from "@/constants/locations";
import { getAllCategory } from "@/services/category";
import { ICategory, IErrorResponse } from "@/types";
import { Filter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FilterProductSheet = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await getAllCategory();
        setCategories(data);
      } catch (err) {
        const error = err as IErrorResponse;
        toast.error(error?.message);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchQuery = (query: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(query, value.toString());

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          Filter Products <Filter />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-white overflow-y-auto pb-6">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="px-4 md:px-6 lg:px-8 space-y-6">
          <Button
            className="bg-red-500 w-full hover:bg-red-500 duration-200"
            disabled={searchParams?.toString().length === 0}
            onClick={() => {
              router.push(`${pathname}`, {
                scroll: false,
              });
            }}
          >
            Clear Filters
          </Button>
          <div>
            <h3 className="font-semibold text-lg mb-2">Condition</h3>
            <RadioGroup>
              <Label className="flex items-center space-x-2 py-1">
                <RadioGroupItem
                  value={"Used"}
                  onClick={() => handleSearchQuery("condition", "Used")}
                />
                <span>Used</span>
              </Label>
              <Label className="flex items-center space-x-2 py-1">
                <RadioGroupItem
                  value={"New"}
                  onClick={() => handleSearchQuery("condition", "New")}
                />
                <span>New</span>
              </Label>
            </RadioGroup>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <RadioGroup>
              {Object.values(Locations).map((location: string) => (
                <Label
                  key={location}
                  className="flex items-center space-x-2 py-1"
                >
                  <RadioGroupItem
                    value={location}
                    onClick={() => handleSearchQuery("location", location)}
                  />
                  <span>{location}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Category</h3>
            <RadioGroup>
              {categories.map((category: ICategory) => (
                <Label
                  key={category?._id}
                  className="flex items-center space-x-2 py-1"
                >
                  <RadioGroupItem
                    value={category?._id}
                    onClick={() => handleSearchQuery("category", category?._id)}
                  />
                  <span>{category?.name}</span>
                </Label>
              ))}
            </RadioGroup>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterProductSheet;
