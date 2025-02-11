import { Button } from "@/components/ui/button";
import React from "react";
import SigninButton from "./SigninButton";
import SplitTextAnimation from "@/components/animation/SplitTextAnimation";

export default function Welcome() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full p-5 min-h-screen drop-shadow-lg">
      <div className="flex flex-col sm:items-start items-center sm:justify-start justify-center sm:text-left text-center gap-3">
        <p className="sm:text-6xl text-5xl font-semibold">
          <span className="text-blue-400">Fsegt</span>
          <span className="text-white">Classroom</span>
        </p>

        <SplitTextAnimation
          className="text-sm sm:w-[900px] w-fit text-gray-500"
          text="Welcome to Fsegt-classroom

Were excited to offer you an innovative online learning environment designed to enhance collaboration and streamline your educational experience. With our user-friendly interface, you can effortlessly create, manage, and participate in virtual classrooms, making learning more engaging and accessible.

Whether you're an educator aiming to inspire or a student eager to explore, Fsegt-classroom provides the tools you need to succeed. Join us today and transform the way you teach and learn.

Experience the future of education with Fsegt-classroom—where knowledge meets innovation"
        />
      </div>
      {/* Sigin in With Google*/}
      <SigninButton />
    </div>
  );
}
