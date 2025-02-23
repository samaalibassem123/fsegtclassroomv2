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

import { Download, FileIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DocTable() {
  //GET DOCUMENTS
  const docs = [
    {
      docname: "Test1",
      doctype: "PDF",
      DoctDate: "2023/23/1",
      DocCourse: "Course 1",
    },
    {
      docname: "Test1",
      doctype: "PDF",
      DoctDate: "2023/23/1",
      DocCourse: "Course 1",
    },
    {
      docname: "Test1",
      doctype: "PDF",
      DoctDate: "2023/23/1",
      DocCourse: "Course 1",
    },
    {
      docname: "Test1",
      doctype: "PDF",
      DoctDate: "2023/23/1",
      DocCourse: "Course 1",
    },
    {
      docname: "Test1",
      doctype: "PDF",
      DoctDate: "2023/23/1",
      DocCourse: "Course 1",
    },
  ];
  return (
    <div className="p-2 py-5 overflow-x-auto space-y-3">
      <div className="flex items-center gap-1">
        <Input placeholder="Search by DocName 🎯" />
        <Button>Search</Button>
      </div>
      <hr />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">num</TableHead>
            <TableHead>DocName</TableHead>
            <TableHead>DocType</TableHead>
            <TableHead className="text-right">Created At</TableHead>
            <TableHead className="text-right">RelatedCourse</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {docs.map((Item, index) => (
            <>
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="flex items-end gap-1">
                  <FileIcon /> {Item.docname}
                </TableCell>
                <TableCell>{Item.doctype}</TableCell>
                <TableCell className="text-right">{Item.DoctDate}</TableCell>
                <TableCell className="text-right">{Item.DocCourse}</TableCell>
                <TableCell className="text-right">
                  <Button>
                    Download <Download />
                  </Button>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
