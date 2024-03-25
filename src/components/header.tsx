import LogoutButton from "./auth/logout-button";
import UserButton from "./auth/user-button";
import { Button } from "./ui/button";

const Header = async () => {
  return (
    <header className="flex w-full items-center justify-between px-10 py-5">
      <LogoutButton>
        <Button variant="ghost" className="text-white">
          Log out
        </Button>
      </LogoutButton>

      <UserButton />
    </header>
  );
};

export default Header;
