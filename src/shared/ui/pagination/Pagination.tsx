import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

/**
 *
 * @totalPage {number}
 * @currentPage
 * @pageSize
 */

interface AppPaginationProps {
  totalPage: number;
  currentPage: number;
  pageSize?: number;
  pageBlockSize?: number;
  onPageChange: (page: number) => void;
}

export function AppPagination({
  totalPage,
  currentPage,
  pageSize = 30,
  pageBlockSize = 5,
  onPageChange,
}: AppPaginationProps) {
  const totalPages = Math.ceil(totalPage / pageSize);
  const currentBlock = Math.ceil(currentPage / pageBlockSize);
  const startPage = (currentBlock - 1) * pageBlockSize + 1;
  const endPage = Math.min(startPage + pageBlockSize - 1, totalPages);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );
  const hasPreviousBlock = startPage > 1;
  const hasNextBlock = endPage < totalPages;
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {/* 이전 버튼 */}
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
            aria-disabled={currentPage === 1}
            className={
              currentPage === 1
                ? "pointer-events-none opacity-30"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
        {hasPreviousBlock && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === currentPage}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
              className="cursor-pointer"
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {hasNextBlock && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(totalPages);
                }}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        {/* 다음 버튼 */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-30"
                : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
