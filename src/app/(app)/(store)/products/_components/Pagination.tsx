"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function PaginationComponent({ itemsLength }: { itemsLength: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page") || 1),
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );
  const itemsPerPage = 12;
  const totalPages = Math.ceil(itemsLength / itemsPerPage);

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page") || 1));
  }, [searchParams]);

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
          <PaginationLink
            href={pathname + "?" + createQueryString("page", String(i))}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return paginationItems;
  };

  return (
    <Pagination className="mb-20">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/products?page=${currentPage > 1 ? currentPage - 1 : 1}`}
          />
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationNext
            href={`/products?page=${currentPage < totalPages ? currentPage + 1 : totalPages}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
