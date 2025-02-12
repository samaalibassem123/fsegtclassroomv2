import React from "react";
import AddPrompt from "../prompts/AddPrompt";

export default function CreatedContainer() {
  //GET THE CREATED CLASS FROM THE DB
  return (
    <div className="flex gap-2 flex-wrap flex-col sm:items-start items-center bg-gradient-to-tr from-black/5 to-blue-100 dark:to-white/10 rounded-lg w-full min-h-screen sm:p-5 py-5">
      <p className="underline text-xl">Create a class : </p>
      <AddPrompt />
    </div>
  );
}
