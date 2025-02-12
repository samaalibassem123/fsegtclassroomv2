import React from "react";
import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddPrompt() {
  //ADD THE NEW CLASS TO THE DB AND SET THE TEACHER AS THE USER ACCOUNT
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" h-[300px] w-[300px] bg-white/50 dark:bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center hover:opacity-70 cursor-pointer transition-all ">
          <CirclePlus size={48} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a class 📚</DialogTitle>
          <DialogDescription>
            Fill the fields to create your class
          </DialogDescription>
        </DialogHeader>
        
      </DialogContent>
    </Dialog>
  );
}
