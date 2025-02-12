import React from "react";
import JoinPrompt from "../prompts/JoinPrompt";
import ClassCard from "../ClassCard";
export default function JoinedContainer() {
  //GET THE JOINED CLASS FROM THE DB
  return (
    <div className="flex gap-6 flex-wrap   sm:justify-normal justify-center bg-gradient-to-tr from-black/5 to-blue-100 dark:to-white/10 rounded-lg w-full h-fit sm:p-5 py-5">
      <JoinPrompt />
      <ClassCard cardType={"J"} />
      <ClassCard cardType={"J"} />
      <ClassCard cardType={"J"} />
      <ClassCard cardType={"J"} />
      <ClassCard cardType={"J"} />
    </div>
  );
}
