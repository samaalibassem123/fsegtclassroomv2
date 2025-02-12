import React from "react";
import JoinPrompt from "../prompts/JoinPrompt";

export default function JoinedContainer() {
  //GET THE JOINED CLASS FROM THE DB
  return (
    <div className="flex gap-2 flex-wrap flex-col sm:items-start items-center bg-gradient-to-tr from-black/5 to-blue-100 dark:to-white/10 rounded-lg w-full min-h-screen sm:p-5 py-5">
      <p className="underline text-xl">Join a class : </p>
      <JoinPrompt />
    </div>
  );
}
