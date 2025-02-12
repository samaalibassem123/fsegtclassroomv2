import React from "react";

import { LogIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import JoinForm from "../Forms/JoinForm";

export default function JoinPrompt() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className=" h-[300px] w-[300px] bg-white/50 dark:bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center hover:opacity-70 cursor-pointer transition-all ">
        <LogIn size={48} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join a class 📚 </DialogTitle>
          <DialogDescription>
            Fill the fields to create your class
          </DialogDescription>
        </DialogHeader>
        {/*FORM */}
        <JoinForm />
      </DialogContent>
    </Dialog>
  );
}
