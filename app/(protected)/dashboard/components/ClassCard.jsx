"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookText, MessageCircle, Video } from "lucide-react";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

export default function ClassCard({ cardType }) {
  const [EnterClicked, EnterIsClicked] = useState(false);
  const [docClicked, docIsClicked] = useState(false);
  const [meetClicked, meetIsClicked] = useState(false);
  const [chatClicked, chatIsClicked] = useState(false);
  const [showcode, setShowcode] = useState(false);

  return (
    <Card className="w-[300px] h-fit ">
      <CardHeader className="flex flex-row justify-between items-center py-2  drop-shadow-lg ">
        <CardTitle className=" text-xl">Math</CardTitle>
        <CardDescription className=" bg-gradient-to-tr from-blue-300 to-orange-400 w-fit p-2 rounded-lg float-right text-white">
          2BI
        </CardDescription>
      </CardHeader>
      <hr className="mb-5" />
      <CardContent className="flex flex-col justify-between  drop-shadow-lg">
        <div className="flex gap-3 items-end">
          <p className="underline">Teacher name:</p>
          <span className="text-sm text-gray-400">Abd salem</span>
        </div>
        <div className="flex gap-3 items-end">
          <p className="underline">ClassCode:</p>
          <span className="text-sm text-gray-400">xxxxxxx</span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 items-center justify-center  drop-shadow-lg">
        <div className="flex gap-3">
          <Link href={"/calssid"} onClick={() => EnterIsClicked(true)}>
            <Button className="bg-blue-500">
              {EnterClicked ? (
                <ClipLoader color="#a6b9f4" loading={true} size={20} />
              ) : (
                "Enter"
              )}
            </Button>
          </Link>
          <Button className="bg-red-400">
            {cardType === "J" ? <span>Quit</span> : <span>Delete</span>}
          </Button>
        </div>

        {/*DIRECT LINKS */}
        <div className="flex gap-3">
          <Link href={"/chat"} onClick={() => chatIsClicked(true)}>
            <Button className="bg-orange-300">
              {chatClicked ? (
                <ClipLoader color="#a6b9f4" loading={true} size={20} />
              ) : (
                <MessageCircle size={32} />
              )}
            </Button>
          </Link>

          <Link href={"meet"} onClick={() => meetIsClicked(true)}>
            <Button className="bg-black/70 dark:bg-white/50">
              {meetClicked ? (
                <ClipLoader color="#a6b9f4" loading={true} size={20} />
              ) : (
                <Video size={32} />
              )}
            </Button>
          </Link>

          <Link href={"docs"} onClick={() => docIsClicked(true)}>
            <Button className="bg-blue-300">
              {docClicked ? (
                <ClipLoader color="#a6b9f4" loading={true} size={20} />
              ) : (
                <BookText size={32} />
              )}
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
