import React from "react";
import AddCourse from "./cours/AddCourse";
import CourseCard from "./cours/CourseCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddTd from "./TD/AddTd";
import TdCard from "./TD/TdCard";

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
    <Tabs defaultValue="course" className="w-full">
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
        {/*IF THERES IS NO COURSE */}
        <p className="text-gray-600 text-center text-xl">
          Create Your First Course Using The Upper Button <br /> 🙄☝
        </p>

        {/*GET COURSES*/}
        <div className=" space-y-3">
          <CourseCard Docs={docs} />
          <CourseCard Docs={docs} />
          <CourseCard Docs={docs} />
        </div>
      </TabsContent>

      {/* TD */}
      <TabsContent value="Td" className="px-5">
        {/*ROLE == TEACHER */}
        <AddTd />
        {/*IF THERES IS NO TD */}
        <p className="text-gray-600 text-center text-xl">
          Create Your First TD Using The Upper Button <br /> 🙄☝
        </p>

        {/*GET TDS*/}
        <div className=" space-y-3">
          <TdCard Docs={docs} />
          <TdCard Docs={docs} />
        </div>
      </TabsContent>
    </Tabs>
  );
}
