import React from "react";
import Backgournd from "../../components/animation/Backgournd";
import Welcome from "./components/Welcome";
import { ModeToggle } from "@/components/animation/ModeToggle";

export default function page() {
  return (
    <div className=" min-h-svh">
      <Backgournd />
      
      <header className="flex p-2">
        <ModeToggle className=" float-right" />
      </header>

      <Welcome />

      <footer className="flex items-center justify-center bg-blue-200/20 p-2 ">
        Created By besbes
      </footer>
    </div>
  );
}
