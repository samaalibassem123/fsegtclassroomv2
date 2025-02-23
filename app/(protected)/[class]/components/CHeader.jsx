import { ModeToggle } from "@/components/animation/ModeToggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import DMenu from "./CMenu";
import { BookText, LogOut, MessageCircle, Users, Video } from "lucide-react";
import Link from "next/link";
import CMenu from "./CMenu";

export default function CHeader() {
  return (
    <header className=" z-40 p-4 sticky top-0 flex items-center justify-between drop-shadow-xl shadow-lg backdrop-blur-sm dark:bg-black/50">
      <h1 className="sm:text-2xl text-xl font-semibold">
        <span className="text-blue-500">Fsegt</span>
        <span className="text-black/70 dark:text-white">Classroom</span>
      </h1>
      <div className="lg:flex hidden gap-6">
        <Link href="/test">
          <Button className="font-extrabold ">Dashboard</Button>
        </Link>
        <Link href="/test/chat">
          <Button className="font-extrabold ">
            Chat <MessageCircle size={32} />
          </Button>
        </Link>
        <Link href="/test/meet">
          <Button className="font-extrabold ">
            Meet
            <Video size={32} />
          </Button>
        </Link>
        <Link href="/test/docs">
          <Button className="font-extrabold ">
            Docs <BookText size={32} />
          </Button>
        </Link>
        {/*if the role is a teacher*/}
        <Link href="/test/groups">
          <Button className="font-extrabold ">
            Groups <Users size={32} />
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button className="font-extrabold bg-white text-black hover:bg-white/40 ">
            Go Back to Your Classes <LogOut />
          </Button>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/*THE LOGOUT BUTTON */}
        <Button className="lg:inline-block hidden font-semibold">Logout</Button>
        <div className=" lg:inline-block hidden">
          <ModeToggle />
        </div>
        {/*MENU FOR SMALL DEVICES */}
        <CMenu />
      </div>
    </header>
  );
}
