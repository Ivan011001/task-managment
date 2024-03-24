"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreateTask() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createTask = api.task.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setTitle("");
      setDescription("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTask.mutate({ title, description });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createTask.isPending}
      >
        {createTask.isPending ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
