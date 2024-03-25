"use client";

import { useRouter } from "next/navigation";

import { api } from "~/trpc/react";

interface IHardDeleteTaskProps {
  id: number;
}

export function HardDeleteTask({ id }: IHardDeleteTaskProps) {
  const router = useRouter();

  const softDelete = api.task.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const onHandleDelete = () => {
    softDelete.mutate({ id });
  };

  return <button onClick={onHandleDelete}>Delete</button>;
}
