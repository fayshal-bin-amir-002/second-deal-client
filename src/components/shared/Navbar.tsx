"use client";

import Link from "next/link";
import Container from "./Container";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { MessageSquareText, ShoppingBag, User } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutUser } from "@/services/auth";
import NavBarSheet from "../modules/home/navbar/NavBarSheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, setIsLoading } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setIsLoading(true);
  };

  return (
    <nav
      className={` sticky top-0 w-full z-50 transition-all duration-100 py-3 ${
        isScrolled ? "bg-white shadow" : "bg-orange-50/50"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={logo}
              alt="logo-image"
              width={160}
              height={100}
              priority
            />
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <Link href={`/products`} className="hidden md:block">
              <Button>All Products</Button>
            </Link>
            {user && (
              <Link
                href={`/user/my-listing/add-product`}
                className="hidden md:block"
              >
                <Button variant="outline">Sell My Product</Button>
              </Link>
            )}
            <Link href="/wishlists" className=" font-medium relative">
              <MessageSquareText />
            </Link>
            <Link href="/wishlists" className="font-medium relative">
              <ShoppingBag />
              <span className="-top-2.5 -right-2.5 absolute text-orange-400">
                1
              </span>
            </Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                  <Avatar>
                    <Image
                      src="https://github.com/shadcn.png"
                      alt="avatar-image"
                      width={100}
                      height={100}
                    />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    <Link href="/">
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                    </Link>
                    <Link href={`/${user?.role}/dashboard`}>
                      <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => handleLogout()}
                  >
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href="/login"
                className="hidden md:block text-lg font-medium cursor-pointer"
              >
                <Button variant="outline">
                  <User /> Login
                </Button>
              </Link>
            )}
            <span className="block md:hidden">
              <NavBarSheet user={user} />
            </span>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
