"use client";
import { ModeToggle } from "@/components/animation/ModeToggle";
import SplitTextAnimation from "@/components/animation/SplitTextAnimation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookText,
  LogOut,
  Menu,
  MessageCircle,
  Users,
  Video,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BounceLoader, ClipLoader } from "react-spinners";

export default function CMenu() {
  const pathname = usePathname();

  const [Dashboard, DashboardIsClicked] = useState(false);
  const [docClicked, docIsClicked] = useState(false);
  const [meetClicked, meetIsClicked] = useState(false);
  const [chatClicked, chatIsClicked] = useState(false);
  const [GroupClicked, GroupIsClicked] = useState(false);
  const [LogoutClicked, LogoutIsClicked] = useState(false);

  useEffect(() => {
    DashboardIsClicked(false);
    docIsClicked(false);
    meetIsClicked(false);
    chatIsClicked(false);
    GroupIsClicked(false);
    LogoutIsClicked(false);
  }, [pathname]);

  return (
    <div className="lg:hidden flex items-center ">
      <Sheet>
        <SheetTrigger>
          <Menu size={30} strokeWidth={2} />
        </SheetTrigger>
        <SheetContent side={"bottom"}>
          <SheetHeader>
            <ModeToggle />{" "}
            <SheetTitle>
              {" "}
              <SplitTextAnimation text={"Hello ! "} className="text-sm" />
            </SheetTitle>
            {/*LOGOUT BUTTON*/}
            <div className="flex flex-col items-center justify-center gap-3">
              {/*GET USER NAME */}
              <span className="text-sm text-black/70 dark:text-white">
                Bassem Samaali
              </span>
              <p className="flex">
                <SplitTextAnimation
                  text={"I hope you having a good day"}
                  className="text-sm"
                />
                🙂
              </p>
              <Link href={"/test"} onClick={() => DashboardIsClicked(true)}>
                <SheetClose>
                  <Button>
                    {Dashboard ? (
                      <>
                        Dashboard
                        <BounceLoader color="#ffffff" size={20} />
                      </>
                    ) : (
                      <>Dashboard</>
                    )}
                  </Button>
                </SheetClose>
              </Link>
              <Link href={"/test/chat"} onClick={() => chatIsClicked(true)}>
                <SheetClose>
                  <Button>
                    {chatClicked ? (
                      <>
                        Chat
                        <BounceLoader color="#ffffff" size={20} />
                      </>
                    ) : (
                      <>
                        Chat <MessageCircle size={32} />
                      </>
                    )}
                  </Button>
                </SheetClose>
              </Link>
              <Link href={"/test/meet"} onClick={() => meetIsClicked(true)}>
                <SheetClose>
                  <Button>
                    {meetClicked ? (
                      <>
                        Meet
                        <BounceLoader color="#ffffff" size={20} />
                      </>
                    ) : (
                      <>
                        Meet <Video size={32} />
                      </>
                    )}
                  </Button>
                </SheetClose>
              </Link>
              <Link href={"/test/docs"} onClick={() => docIsClicked(true)}>
                <SheetClose>
                  <Button>
                    {docClicked ? (
                      <>
                        Docs
                        <BounceLoader color="#ffffff" size={20} />
                      </>
                    ) : (
                      <>
                        Docs <BookText size={32} />
                      </>
                    )}
                  </Button>
                </SheetClose>
              </Link>
              {/*IF THE ROLE IS A TEACHER*/}
              <Link href={"/test/groups"} onClick={() => GroupIsClicked(true)}>
                <SheetClose>
                  {" "}
                  <Button>
                    {GroupClicked ? (
                      <>
                        Groups
                        <BounceLoader color="#ffffff" size={20} />
                      </>
                    ) : (
                      <>
                        Groups <Users />
                      </>
                    )}
                  </Button>
                </SheetClose>
              </Link>{" "}
              <Link href="/dashboard">
                <SheetClose>
                  <Button className="font-extrabold bg-white text-black hover:bg-white/40 ">
                    Go Back to Your Classes <LogOut />
                  </Button>
                </SheetClose>
              </Link>
              <Link href={"/"} onClick={() => LogoutIsClicked(true)}>
                <Button className="font-extrabold ">
                  {LogoutClicked ? (
                    <>
                      Log-out
                      <BounceLoader color="#ffffff" size={20} />
                    </>
                  ) : (
                    <>
                      Log-out <LogOut size={32} />
                    </>
                  )}
                </Button>
              </Link>
            </div>
            <SheetDescription>Created By Besbes</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
