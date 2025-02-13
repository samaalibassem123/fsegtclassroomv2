import { ModeToggle } from "@/components/animation/ModeToggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import DMenu from "./CMenu";
import { BookText, MessageCircle, Video } from "lucide-react";

export default function CHeader() {
  return (
    <header className=" z-40 p-4 sticky top-0 flex items-center justify-between drop-shadow-xl shadow-lg backdrop-blur-sm dark:bg-black/50">
      <h1 className="sm:text-2xl text-xl font-semibold">
        <span className="text-blue-500">Fsegt</span>
        <span className="text-black/70 dark:text-white">Classroom</span>
      </h1>
      <div className="sm:flex hidden gap-6">
        <Button className="font-extrabold ">
          Chat <MessageCircle size={32} />
        </Button>
        <Button className="font-extrabold ">
          Meet
          <Video size={32} />
        </Button>
        <Button className="font-extrabold ">
          Docs <BookText size={32} />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

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
