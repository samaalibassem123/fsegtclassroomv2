import React from "react";
//ADD THE NEW CLASS TO THE DB AND SET THE TEACHER AS THE USER ACCOUNT
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function AddForm() {
  return (
    <form action="" className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Label>Class name :</Label>
        <Input name="cname" placeholder="exp : Math class" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Class niveau:</Label>
        <Input name="cniv" placeholder="exp : 2BI" />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Class Code:</Label>
        <Input name="ccode" placeholder="*********" />
      </div>
      <Button>Add</Button>
    </form>
  );
}
