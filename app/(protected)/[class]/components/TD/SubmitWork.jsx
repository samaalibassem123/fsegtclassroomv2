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
import { SelectStudents } from "./SelectStudents";

export default function SubmitWork() {
  //GET STUDENTS
  const people = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    { id: 4, name: "Alice Brown", email: "alice@example.com" },
    { id: 5, name: "Charlie Davis", email: "charlie@example.com" },
  ];

  return (
    <Drawer>
      <DrawerTrigger>
        <Button className=" ">Submit your work</Button>
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Work submition🎖️</DrawerTitle>
          <DrawerDescription>Please Fill those filds ✏️</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-[40svh]">
          <form className="p-5 space-y-3">
            <div className="flex flex-col gap-2">
              <Label className="text-xl">
                Document:
                <small className="text-sm text-gray-600">
                  Upload your Documents
                </small>
              </Label>
              <FileUploader />
            </div>
            <div className="flex md:flex-row flex-col gap-2">
              <Label className="text-xl">
                Description:
                <small className="text-sm text-gray-600">(optional)</small>
              </Label>
              <Input placeholder="exp: this course or assignment  is for the Group A04 " />
            </div>
            <div className="flex  flex-col gap-2">
              <Label className="text-xl">
                Add Persons that worked with you in this project:
                <small className="text-sm text-gray-600">(optional)</small>
              </Label>
              <SelectStudents people={people} />
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
