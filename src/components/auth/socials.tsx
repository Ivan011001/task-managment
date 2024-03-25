"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "../ui/button";

// import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

import { signIn } from "next-auth/react";

const Socials = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onHandleClick = async (provider: "google" | "github" | "discord") => {
    await signIn(provider, {
      callbackUrl: callbackUrl ?? "/",
    });
  };

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => onHandleClick("discord")}
      >
        <FaDiscord className="h-5 w-5 fill-blue-700" />
      </Button>

      <Button
        className="w-full"
        size="lg"
        variant="outline"
        onClick={() => onHandleClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Socials;
