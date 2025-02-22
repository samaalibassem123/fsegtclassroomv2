import React from "react";
import AddCourse from "./AddCourse";

export default function Dashboard() {
  return (
    <div className="w-full min-h-svh p-2 ">
      {/*ROLE == TEACHER */}
      <AddCourse />
      {/*GET COURSES*/}
      <p className="text-gray-600 text-center text-xl">
        Create Your First Course Using The Upper Button <br /> 🙄☝
      </p>
      {}
    </div>
  );
}
