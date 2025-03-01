"use client";

import Link from "next/link";
import Container from "./Container";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { ShoppingBag, User } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { Avatar, AvatarFallback } from "../ui/avatar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` sticky top-0 w-full z-50 transition-all duration-300 py-3 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="logo-image" width={160} height={100} />
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <Link href="/wishlists" className="text-lg font-medium relative">
              <ShoppingBag />
              <span className="-top-3 -right-3 absolute text-orange-400">
                1
              </span>
            </Link>
            {user ? (
              <Avatar>
                <Image
                  src="https://github.com/shadcn.png"
                  alt="avatar-image"
                  width={100}
                  height={100}
                />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
            ) : (
              <Link
                href="/login"
                className="text-lg font-medium cursor-pointer"
              >
                <Button variant="outline" className="">
                  <User /> Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
