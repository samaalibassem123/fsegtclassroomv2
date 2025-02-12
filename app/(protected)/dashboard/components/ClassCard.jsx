import React from "react";
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

export default function ClassCard({ cardType }) {
  return (
    <Card className="w-[300px] h-[300px]">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="underline text-xl">Math</CardTitle>
        <CardDescription className=" bg-gradient-to-tr from-blue-300 to-orange-400 w-fit p-2 rounded-lg float-right">
          2BI
        </CardDescription>
      </CardHeader>
      <hr className="mb-5" />
      <CardContent className="flex flex-col justify-between">
        <div className="flex gap-3 items-end">
          <p>Teacher name:</p>
          <span className="text-sm text-gray-400">Abd salem</span>
        </div>
        <div className="flex gap-3 items-end">
          <p>ClassCode:</p>
          <span className="text-sm text-gray-400">xxxxxxx</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-center justify-center">
        <div className="flex gap-3">
          <Button>Enter</Button>
          <Button className="bg-red-400">
            {cardType === "J" ? <span>Quit</span> : <span>Delete</span>}
          </Button>
        </div>

        <div className="flex gap-3">
          <Button className="bg-orange-300">
            <MessageCircle size={32} asChild />
          </Button>
          <Button className="bg-black/70">
            <Video size={32} />
          </Button>
          <Button className="bg-blue-300">
            <BookText size={32} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
