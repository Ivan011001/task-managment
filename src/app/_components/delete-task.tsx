"use client";

import { useRouter } from "next/navigation";

import { api } from "~/trpc/react";

interface IDeleteTaskProps {
  id: number;
}

export function DeleteTask({ id }: IDeleteTaskProps) {
  const router = useRouter();

  const deleteTask = api.task.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const onHandleDelete = () => {
    deleteTask.mutate({ id });
  };

  return <button onClick={onHandleDelete}>Delete</button>;
}
