import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Button } from "../../button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SDPagination = ({ totalPage }: { totalPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePagginationQuery = (value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", value.toString());

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };
  return (
    <div className="flex items-center gap-3 my-6 justify-end">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => {
          if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            handlePagginationQuery(currentPage - 1);
          }
        }}
      >
        <ArrowLeft />
      </Button>
      {[...Array(totalPage)].map((_, i) => (
        <Button
          variant={currentPage === i + 1 ? "default" : "outline"}
          key={i}
          onClick={() => {
            setCurrentPage(i + 1);
            handlePagginationQuery(i + 1);
          }}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPage}
        onClick={() => {
          if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
            handlePagginationQuery(currentPage + 1);
          }
        }}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default SDPagination;
