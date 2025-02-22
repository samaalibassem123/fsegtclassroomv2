import React from "react";
import AddCourse from "./AddCourse";
import CourseCard from "./CourseCard";

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
    <div className="w-full min-h-svh p-2 ">
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

    </div>
  );
}
