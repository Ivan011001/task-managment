"use client";

import { useRouter } from "next/navigation";

import { api } from "~/trpc/react";

import { toast } from "sonner";

interface ISoftDeleteTaskProps {
  children?: React.ReactNode;
  id: number;
}

export function SoftDeleteTask({ id, children }: ISoftDeleteTaskProps) {
  const router = useRouter();

  const softDelete = api.task.softDelete.useMutation({
    onSuccess: () => {
      router.refresh();
      toast.success("Task was deleted");
    },
  });

  const onHandleDelete = () => {
    softDelete.mutate({ id });
  };

  return (
    <span className="" onClick={onHandleDelete}>
      {children}
    </span>
  );
}
