import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { getServerAuthSession } from "~/server/auth";
import LogoutButton from "./logout-button";

const LINKS = [
  { title: "Profile", href: "/profile" },
  { title: "Tasks", href: "/tasks" },
  { title: "Trash", href: "/trash" },
];

const UserButton = async () => {
  const session = await getServerAuthSession();

  return (
    <div className="flex items-center gap-8">
      <p className="max-w-lg text-center text-base font-normal text-neutral-300">
        {session?.user.name}
      </p>

      <DropdownMenu>
        <DropdownMenuTrigger className="focus-visible:outline-none">
          <Avatar>
            <AvatarImage
              src={session?.user.image ?? ""}
              alt={session?.user.name ?? "User avatar"}
            />
            <AvatarFallback>{session?.user.name ?? ""}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {LINKS.map(({ href, title }) => (
            <Link href={href} key={href}>
              <DropdownMenuItem>{title}</DropdownMenuItem>
            </Link>
          ))}

          <LogoutButton>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
