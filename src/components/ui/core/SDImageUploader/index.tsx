import { cn } from "@/lib/utils";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Input } from "../../input";
import { Label } from "../../label";

type ISDImageUploader = {
  label?: string;
  className?: string;
  setImageFiles: Dispatch<SetStateAction<File[]>>;
  setImagePreview: Dispatch<SetStateAction<string[]>>;
};

const SDImageUploader = ({
  label = "Upload Image",
  className,
  setImageFiles,
  setImagePreview,
}: ISDImageUploader) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageFiles((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };

      reader.readAsDataURL(file);
    }

    e.target.value = "";
  };
  return (
    <div
      className={cn("flex flex-col items-center gap-4 w-36 h-36", className)}
    >
      <Input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="image-uploader"
      />
      <Label
        htmlFor="image-uploader"
        className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
      >
        {label}
      </Label>
    </div>
  );
};

export default SDImageUploader;
