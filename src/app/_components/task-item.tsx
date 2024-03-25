import { SoftDeleteTask } from "./soft-delete-task";
import { Button } from "~/components/ui/button";

import type { ITask } from "~/types";

import { Trash2 } from "lucide-react";

import { capitalizeWord } from "~/helpers/capitalizeWord";

interface ITaskItemProps {
  item: ITask;
}

const TaskItem = ({ item }: ITaskItemProps) => {
  const { title, description } = item;

  return (
    <div className="">
      <div className="relative h-[300px] w-[300px]">
        <div className="relative flex h-full flex-col items-start justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <div>
            <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>
            <div>
              <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
                {capitalizeWord(title)}
              </h1>

              <p className="relative z-50 mb-4 max-h-[100px] overflow-clip text-ellipsis text-base font-normal text-slate-500">
                {capitalizeWord(description ?? "")}
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-between">
            <Button>Edit</Button>

            <SoftDeleteTask id={item.id}>
              <Button variant="destructive" className="rounded-full p-[10px]">
                <Trash2 className="h-5 w-5" size={20} />
              </Button>
            </SoftDeleteTask>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
