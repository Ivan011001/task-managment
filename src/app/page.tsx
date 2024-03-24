import Link from "next/link";

import { LampContainer } from "~/components/ui/lamp";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { CreateTask } from "./_components/create-task";
import { DeleteTask } from "./_components/delete-task";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <LampContainer>
      <main className="">
        {/* <Header /> */}
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Task Managment
          </h1>

          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center justify-center gap-4">
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
        </div>

        <CrudShowcase />
      </main>
    </LampContainer>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const allTask = await api.task.getAll();

  return (
    <div className="w-full max-w-xs">
      {allTask.map((task) => (
        <li key={task.id} className="text-white">
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <DeleteTask id={task.id} />
        </li>
      ))}

      <CreateTask />
    </div>
  );
}
