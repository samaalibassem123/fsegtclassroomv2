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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


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
          <DialogTitle>Create a class 📚 </DialogTitle>
          <DialogDescription>
            Fill the fields to create your class
          </DialogDescription>
        </DialogHeader>
        <form action="" className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                 <Label>Class name :</Label>
                 <Input name="cname" placeholder="exp : Math class"/>   
            </div>
            <div className="flex flex-col gap-2">
                 <Label>Class niveau:</Label>
                 <Input name="cniv" placeholder="exp : 2BI"/>   
            </div>
            <div className="flex flex-col gap-2">
                 <Label>Class Code:</Label>
                 <Input name="ccode" placeholder="*********"/>   
            </div>
            <Button>Add</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
