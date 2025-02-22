import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FileText } from "lucide-react";
import React from "react";

export default function CourseCard({ courseName, Description, Notes, Docs }) {
  return (
    <Accordion type="single" collapsible className="p-2 drop-shadow-lg ">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl font-semibold">
          <div className="flex flex-col">
            <span>Course 1</span>
            <small className="text-gray-600 text-sm">
              Description:blah blah blah
            </small>
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-2">
          <span className=" underline text-lg">Notes:</span>
          <p>
            blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah
          </p>
          <span className=" underline text-lg">Docs:</span>
          {/*docs*/}
          <div className="flex flex-wrap gap-2">
            {Docs.map((doc, index) => (
              <div
                className="border rounded-lg flex items-end gap-1 border-red-400 p-2 cursor-pointer hover:shadow-lg"
                key={index}
              >
                <FileText />
                <span>{doc.name}</span>
                <span className="text-sm text-gray-600">({doc.type})</span>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
