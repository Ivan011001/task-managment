"use client";

import TaskItem from "./task-item";

import { api } from "~/trpc/react";

const TaskList = () => {
  const tasks = api.task.getAll.useQuery();

  return (
    <ul className="flex w-full flex-wrap justify-center gap-5">
      {tasks.data?.map((task) => (
        <li key={task.id}>
          <TaskItem item={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
