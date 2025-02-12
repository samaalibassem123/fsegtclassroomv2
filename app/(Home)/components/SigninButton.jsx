import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
export default function SigninButton() {
  return (
    <Link href={"/dashboard"}>
      <button className="bg-white p-3  rounded-lg font-normal flex items-start justify-between gap-3 border hover:opacity-65 transition-all dark:bg-blue-500 ring-1 dark:ring-blue-400 dark:border-none">
        <span>Sign-in with Google</span>
        <FaGoogle className=" size-5" />
      </button>
    </Link> 
  );
}
