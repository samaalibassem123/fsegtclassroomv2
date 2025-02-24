import React from "react";
import AddCourse from "./AddCourse";
import CourseCard from "./CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const docs = [
    {
      name: "Doc name",
      type: "pdf",
    },
    {
      name: "Doc name",
      type: "pdf",
    },
    {
      name: "Doc name",
      type: "pdf",
    },
    {
      name: "Doc name",
      type: "pdf",
    },
    {
      name: "Doc name",
      type: "pdf",
    },
  ];
  return (
    <Tabs defaultValue="account" className="w-full">
      <div className="w-full flex items-center justify-center py-4">
        <TabsList className="sm:w-[600px] w-full ">
          <TabsTrigger value="course" className="w-full ">
            Course
          </TabsTrigger>
          <TabsTrigger value="Td" className="w-full ">
            TD
          </TabsTrigger>
        </TabsList>
      </div>
      {/*COURSE */}
      <TabsContent value="course" className="px-5">
        {/*ROLE == TEACHER */}
        <AddCourse />
        {/*GET COURSES*/}
        <p className="text-gray-600 text-center text-xl">
          Create Your First Course Using The Upper Button <br /> 🙄☝
        </p>
        <div className=" space-y-3">
          <CourseCard Docs={docs} />
          <CourseCard Docs={docs} />
          <CourseCard Docs={docs} />
        </div>
      </TabsContent>
      {/* TD */}
      <TabsContent value="Td">Change your password here.</TabsContent>
    </Tabs>
  );
}
