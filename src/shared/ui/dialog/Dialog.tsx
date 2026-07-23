import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Button, type ButtonProps } from "@/shared/ui/button/Button";

interface DialogProps {
  trigger?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /* 취소, 닫기 버튼 */
  cancelText: string;
  cancelVariant: ButtonProps["variant"];
  /* 액션 실행 버튼 */
  confirmText?: string;
  confirmVariant?: ButtonProps["variant"];
  onConfirm?: () => void;
  /* 우측 상단 close 버튼 */
  closeable?: boolean;
}

export function Dialog({ ...props }: DialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{props.trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        {props.closeable && (
          <AlertDialogCancel
            render={
              <button
                type="button"
                className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            }
          />
        )}

        <AlertDialogHeader>
          <AlertDialogTitle>{props.title}</AlertDialogTitle>
          {props.description && (
            <AlertDialogDescription>{props.description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            render={
              <Button variant={props.cancelVariant}>{props.cancelText}</Button>
            }
          />
          {props.confirmText && (
            <AlertDialogAction
              onClick={props.onConfirm}
              variant={props.confirmVariant}
            >
              {props.confirmText}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
