"use client";

import { signOut } from "next-auth/react";

interface ILogoutButtonProps {
  children: React.ReactNode;
}

const LogoutButton = ({ children }: ILogoutButtonProps) => {
  const onClick = async () => {
    await signOut();
  };

  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};

export default LogoutButton;
