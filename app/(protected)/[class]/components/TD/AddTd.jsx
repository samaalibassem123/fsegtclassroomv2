import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FileUploader } from "@/components/ui/FileUploader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

export default function AddTd() {
  return (
    <Drawer>
      <div className="flex items-center justify-center py-5 w-full">
        <DrawerTrigger>
          <Button className=" bg-gray-900 hover:bg-black/70 dark:bg-white dark:hover:bg-white/50">
            Add a TD <Plus />
          </Button>
        </DrawerTrigger>
      </div>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you Ready to Build your New Td 😀?</DrawerTitle>
          <DrawerDescription>Please Fill those filds ✏️</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-[40svh]">
          <form className="p-5 space-y-3">
            <div className="flex md:flex-row flex-col gap-2">
              <Label className="text-xl text-nowrap">The Td name :</Label>
              <Input placeholder="exp: Td 1" />
              <Label className="text-xl">
                Description:
                <small className="text-sm text-gray-600">(optional)</small>
              </Label>
              <Input placeholder="exp: this course or assignment  is for the Group A04 " />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-xl">
                Document:
                <small className="text-sm text-gray-600">
                  Upload your Documents for the course
                </small>
              </Label>
              <FileUploader />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xl">Notes:</Label>
              <Textarea />
            </div>
          </form>
        </ScrollArea>
        <DrawerFooter className="border-t-black/40 border-t-[1px]">
          <Button className="p-6 text-lg">Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
