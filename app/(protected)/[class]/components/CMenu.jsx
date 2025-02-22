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
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function CMenu() {
  const [EnterClicked, EnterIsClicked] = useState(false);
  const [Dashboard, DashboardIsClicked] = useState(false);
  const [docClicked, docIsClicked] = useState(false);
  const [meetClicked, meetIsClicked] = useState(false);
  const [chatClicked, chatIsClicked] = useState(false);
  const [GroupClicked, GroupIsClicked] = useState(false);
  const [LogoutClicked, LogoutIsClicked] = useState(false);

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
                <Button>
                  {Dashboard ? (
                    <ClipLoader color="#a6b9f4" loading={true} size={20} />
                  ) : (
                    <>Dashboard</>
                  )}
                </Button>
              </Link>

              <Link href={"/test/chat"} onClick={() => chatIsClicked(true)}>
                <Button>
                  {chatClicked ? (
                    <ClipLoader color="#a6b9f4" loading={true} size={20} />
                  ) : (
                    <>
                      Chat <MessageCircle size={32} />
                    </>
                  )}
                </Button>
              </Link>

              <Link href={"/test/meet"} onClick={() => meetIsClicked(true)}>
                <Button>
                  {meetClicked ? (
                    <ClipLoader color="#a6b9f4" loading={true} size={20} />
                  ) : (
                    <>
                      Meet <Video size={32} />
                    </>
                  )}
                </Button>
              </Link>

              <Link href={"/test/docs"} onClick={() => docIsClicked(true)}>
                <Button>
                  {docClicked ? (
                    <ClipLoader color="#a6b9f4" loading={true} size={20} />
                  ) : (
                    <>
                      Docs <BookText size={32} />
                    </>
                  )}
                </Button>
              </Link>

              {/*IF THE ROLE IS A TEACHER*/}
              <Link href={"/test/group"} onClick={() => GroupIsClicked(true)}>
                <Button>
                  {GroupClicked ? (
                    <ClipLoader color="#a6b9f4" loading={true} size={20} />
                  ) : (
                    <>
                      Groups <Users />
                    </>
                  )}
                </Button>
              </Link>

              <Link href={"/"} onClick={() => LogoutIsClicked(true)}>
                <Button className="font-extrabold ">
                  {LogoutClicked ? (
                    <ClipLoader color="#a6b9f4" loading={true} size={20} />
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
