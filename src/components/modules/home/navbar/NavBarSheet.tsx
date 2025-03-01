import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IUser } from "@/types";
import { AlignJustify, User } from "lucide-react";
import Link from "next/link";

const NavBarSheet = ({ user }: { user: IUser | null }) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <AlignJustify className="text-orange-400" size={28} />
      </SheetTrigger>
      <SheetContent className="px-6">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-end gap-4">
          <div className="flex justify-between items-center gap-4">
            <Link href="/">
              <Button>Sell My Product</Button>
            </Link>
            {!user && (
              <Link
                href="/login"
                className="text-lg font-medium cursor-pointer"
              >
                <Button variant="outline">
                  <User /> Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavBarSheet;
