"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/shared/ui/button/Button";

/**
 * type은 API 생성 후 변경 가능
 */

export type MemberManagement = {
  id: string;
  memberId: string;
  affiliation: string;
  username: string;
  ipAddress: string;
  requestDate: string;
  approveDate: string;
  loginDate: string;
};

export interface ColumnOptions {
  onEdit: (member: MemberManagement) => void;
  onDelete: (member: MemberManagement) => void;
}

export const getMemberColumns = ({
  onEdit,
  onDelete,
}: ColumnOptions): ColumnDef<MemberManagement>[] => [
  {
    accessorKey: "memberId",
    header: "아이디",
  },
  {
    accessorKey: "username",
    header: "이름",
  },
  {
    accessorKey: "affiliation",
    header: "소속",
  },
  {
    accessorKey: "ipAddress",
    header: "IP 주소",
  },
  {
    accessorKey: "requestDate",
    header: "가입 요청일",
  },
  {
    accessorKey: "approveDate",
    header: "승인일",
  },
  {
    accessorKey: "loginDate",
    header: "최근 로그인",
  },
  // 수정 / 삭제 버튼
  {
    id: "actions",
    header: "관리",
    cell: ({ row }) => {
      const member = row.original; // 현재 행의 MemberManagement 데이터 객체

      return (
        <div className="flex items-center gap-2 justify-center">
          <Button
            variant="primary-outline"
            size="md"
            onClick={() => onEdit(member)}
          >
            수정
          </Button>
          <Button
            variant="primary-fill"
            size="md"
            onClick={() => onDelete(member)}
          >
            삭제
          </Button>
        </div>
      );
    },
  },
];
