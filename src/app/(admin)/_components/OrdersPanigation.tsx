"use client";
import { getordersLength } from "@/actions/admin-actions";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function OrdersPanigation({
  setCurrentPage,
  currentPage,
}: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [ordersCount, setOrdersCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(ordersCount / itemsPerPage);

  const getlength = async () => {
    try {
      setLoading(true);
      const length = await getordersLength();
      console.log(length);

      if (length) {
        setOrdersCount(length);
      }
    } catch (error) {
      toast.error("something wrong happend please try again later");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getlength();
  }, []);
  const renderPaginationItems = () => {
    const paginationItems = [];
    const maxVisiblePages = 10;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      if (currentPage <= halfVisiblePages) {
        endPage = maxVisiblePages;
      } else if (currentPage >= totalPages - halfVisiblePages) {
        startPage = totalPages - maxVisiblePages + 1;
      } else {
        startPage = currentPage - halfVisiblePages;
        endPage = currentPage + halfVisiblePages;
      }
    }
    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <PaginationItem key={i}>
          <Button
            variant={`${currentPage == i ? "outline" : "ghost"}`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </Button>
        </PaginationItem>,
      );
    }

    return paginationItems;
  };

  if (loading || ordersCount <= 6) {
    return <div></div>;
  }
  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem>
          <Button
            className="flex items-center justify-center gap-1"
            variant={"outline"}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <Button
            className="flex items-center justify-center gap-1"
            variant={"outline"}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <ChevronRight className="h-4 w-4" /> Next
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default OrdersPanigation;
