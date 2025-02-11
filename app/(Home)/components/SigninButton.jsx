import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa";
export default function SigninButton() {
  return (
    <button className="bg-white p-3  rounded-lg font-normal flex items-start justify-between gap-3 border hover:opacity-65 transition-all">
      <span>Sign-in with Google</span>
      <FaGoogle className=" size-5" />  
    </button>
  );
}
