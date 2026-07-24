"use client";

import { ColumnDef } from "@tanstack/react-table";

/**
 * type은 API 생성 후 변경 가능
 */

export type ViewVisitorType = {
  id: string;
  store: string;
  date: string;
  visitor: number;
};

export const columns: ColumnDef<ViewVisitorType>[] = [
  {
    accessorKey: "store",
    header: "지점",
  },
  {
    accessorKey: "date",
    header: "일자",
  },
  {
    accessorKey: "visitor",
    header: "방문자 수",
  },
];
