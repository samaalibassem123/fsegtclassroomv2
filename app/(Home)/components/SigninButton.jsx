import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function SigninButton() {
  return (
    <button className="bg-white p-3  rounded-lg font-normal flex items-center justify-between gap-3 border hover:opacity-65 transition-all">
      <span>Sigin in with Google</span>
      <FcGoogle className=" size-6" />
    </button>
  );
}
