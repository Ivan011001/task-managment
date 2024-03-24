"use client";

import { Button } from "../ui/button";

const SignOutButton = () => {
  const handleSignOut = () => {
    console.log("SignOut");
  };

  return <Button onClick={handleSignOut}>SignOutButton</Button>;
};

export default SignOutButton;
