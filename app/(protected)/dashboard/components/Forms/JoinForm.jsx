import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
//CHECK IF CODE IS COORECT AND REDIRECT HIM TO HIS CLASS
export default function JoinForm() {
  return (
    <form action="" className="flex flex-col gap-4">
      <Label>Classroom Code:</Label>
      <Input placeholder="Enter the classroom code" name="ccode" />
      <Label>Class gorup:</Label>
      <Input placeholder="exp:A04" name="cgroup" />
      <Button>Join</Button>
    </form>
  );
}
