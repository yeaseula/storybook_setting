import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/shared/lib/utils";

/**
 *
 * @totalPage
 * @currentPage
 * @pageSize 한 페이지에 보여 줄 게시물 개수 (기본값 설정 가능)
 * @pageBlockSize 한 번에 노출할 패이지 버튼 개수 (기본값 5)
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
  const PaginationStyle =
    "rounded-full border-none hover:bg-primary-light-trans";
  const ActiveStyle = "border-primary-dark bg-primary-dark text-white";

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {/* 이전 버튼 */}
          <PaginationPrevious
            text="이전"
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
                className={PaginationStyle}
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
              className={cn(
                PaginationStyle,
                page === currentPage && ActiveStyle,
              )}
              isActive={page === currentPage}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
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
                className={PaginationStyle}
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
            text="다음"
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
