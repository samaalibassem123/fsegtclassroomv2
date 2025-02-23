import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users } from "lucide-react";
import StudentTable from "./components/StudentTable";

export default function page() {
  const groups = [
    {
      gname: "Groupe 1",
    },
    {
      gname: "Groupe 2",
    },
    {
      gname: "Groupe 3",
    },
    {
      gname: "Groupe 4",
    },
    {
      gname: "Groupe 5",
    },
  ];
  return (
    <div className="p-5">
      {groups.map((Item, index) => (
        <div key={index}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl">
                <span className="flex items-center gap-2">
                  <Users /> {Item.gname}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {/*Students in the group   */}
                <StudentTable />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
