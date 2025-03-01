import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="hidden md:flex justify-center items-center bg-amber-50/50 ml-6 rounded-2xl">
            <Image
              src={logo}
              alt="logo-image"
              width={300}
              height={50}
              className=""
            />
          </div>
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Second Deal account
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email/Phone Number</Label>
                <Input id="email" type="text" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="underline underline-offset-4 text-orange-400 font-medium"
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
