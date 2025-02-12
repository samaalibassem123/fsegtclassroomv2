import { ModeToggle } from "@/components/animation/ModeToggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import DMenu from "./Menu";

export default function Header() {
  return (
    <header className=" z-40 p-4 sticky top-0 flex items-center justify-between drop-shadow-xl shadow-lg backdrop-blur-sm dark:bg-black/50">
      <h1 className="sm:text-2xl text-xl font-semibold">
        <span className="text-blue-500">Fsegt</span>
        <span className="text-black/70 dark:text-white">Classroom</span>
      </h1>

      <div className="flex items-center justify-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {/*MENU FOR BIG DEVICES*/}
        {/*THE LOGOUT BUTTON */}
        <Button className="sm:inline-block hidden font-semibold">Logout</Button>
        <div className=" sm:inline-block hidden">
          <ModeToggle />
        </div>
        {/*MENU FOR SMALL DEVICES */}
        <DMenu />
      </div>
    </header>
  );
}
