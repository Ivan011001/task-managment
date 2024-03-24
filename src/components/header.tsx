import { getServerAuthSession } from "~/server/auth";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const Header = async () => {
  const session = await getServerAuthSession();

  return (
    <header className="w-full">
      <Avatar>
        <AvatarImage src={session?.user.image ?? ""} alt="@shadcn" />
        <AvatarFallback>{session?.user.name ?? ""}</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Header;
