import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
      <div className="bg-orange-400 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <div className="mt-5">
        <Link href="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
