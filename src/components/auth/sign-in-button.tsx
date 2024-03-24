"use client";

import { Button } from "../ui/button";

const SignInButton = () => {
  const handleSignIn = () => {
    console.log("signin");
  };

  return <Button onClick={handleSignIn}>SignInButton</Button>;
};

export default SignInButton;
