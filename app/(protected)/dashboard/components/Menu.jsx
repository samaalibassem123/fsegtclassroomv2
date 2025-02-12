import { ModeToggle } from "@/components/animation/ModeToggle";
import SplitTextAnimation from "@/components/animation/SplitTextAnimation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";

export default function DMenu() {
  return (
    <div className="sm:hidden flex items-center ">
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

              <Button className="font-extrabold ">Log-out</Button>
            </div>
            <SheetDescription>Created By Besbes</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
