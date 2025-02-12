import React from "react";
import AddPrompt from "../prompts/AddPrompt";
import ClassCard from "../ClassCard";

export default function CreatedContainer() {
  //GET THE CREATED CLASS FROM THE DB
  return (
    <div className="flex gap-6 flex-wrap   sm:justify-normal justify-center bg-gradient-to-tr from-black/5 to-blue-100 dark:to-white/10 rounded-lg w-full h-fit sm:p-5 py-5">
      <AddPrompt />
      <ClassCard cardType={"C"} />
      <ClassCard cardType={"C"} />
      <ClassCard cardType={"C"} />
      <ClassCard cardType={"C"} />
      <ClassCard cardType={"C"} />
      <ClassCard cardType={"C"} />
      <ClassCard cardType={"C"} />
      <ClassCard cardType={"C"} />
    </div>
  );
}
