import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function StudentTable() {
  const students = [
    {
      studentName: "besbes",
      studentImg: "blag",
      studentMail: "samaalibassem123@gmail.com",
      studentGroup: "a04",
    },
    {
      studentName: "besbes",
      studentImg: "blag",
      studentMail: "samaalibassem123@gmail.com",
      studentGroup: "a04",
    },
    {
      studentName: "besbes",
      studentImg: "blag",
      studentMail: "samaalibassem123@gmail.com",
      studentGroup: "a04",
    },
    {
      studentName: "besbes",
      studentImg: "blag",
      studentMail: "samaalibassem123@gmail.com",
      studentGroup: "a04",
    },
    {
      studentName: "besbes",
      studentImg: "blag",
      studentMail: "samaalibassem123@gmail.com",
      studentGroup: "a04",
    },
    {
      studentName: "besbes",
      studentImg: "blag",
      studentMail: "samaalibassem123@gmail.com",
      studentGroup: "a04",
    },
  ];
  return (
    <div className="p-2">
      <div className="flex items-center gap-1">
        <Input placeholder="Search by Student Name 🎯" />
        <Button>Search</Button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Img</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Student Mail</TableHead>
            <TableHead className="text-right">Student Group</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{item.studentName}</TableCell>
              <TableCell>{item.studentMail}</TableCell>
              <TableCell className="text-right">{item.studentGroup}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
