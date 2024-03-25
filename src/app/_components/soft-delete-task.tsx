"use client";

import { useRouter } from "next/navigation";

import { api } from "~/trpc/react";

interface ISoftDeleteTaskProps {
  id: number;
}

export function SoftDeleteTask({ id }: ISoftDeleteTaskProps) {
  const router = useRouter();

  const softDelete = api.task.softDelete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const onHandleDelete = () => {
    softDelete.mutate({ id });
  };

  return <button onClick={onHandleDelete}>Delete</button>;
}
