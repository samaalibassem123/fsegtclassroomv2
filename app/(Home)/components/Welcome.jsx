"use client";
import React from "react";
import SigninButton from "./SigninButton";
import { motion } from "framer-motion";
import { ShowAnimation } from "@/utils/animation";

export default function Welcome() {
  return (
    <motion.div
      variants={ShowAnimation}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 items-center justify-center min-h-svh w-full px-5  drop-shadow-lg"
    >
      <motion.div
        variants={ShowAnimation}
        className="flex flex-col lg:items-start items-center lg:justify-start justify-center lg:text-left text-center gap-3"
      >
        <motion.p
          variants={ShowAnimation}
          className="sm:text-6xl text-5xl font-semibold"
        >
          <span className="text-blue-400">Fsegt</span>
          <span className="text-white">Classroom</span>
        </motion.p>
        <motion.p
          variants={ShowAnimation}
          className="text-gray-600 lg:text-sm text-[12px] p-1 lg:w-[900px] w-auto"
        >
          Welcome to{" "}
          <span>
            <span className=" font-extrabold underline">Fsegt-classroom </span>
          </span>
          ! We're excited to offer you an innovative online learning environment
          designed to enhance collaboration and streamline your educational
          experience. With our user-friendly interface, you can effortlessly
          create, manage, and participate in virtual classrooms, making learning
          more engaging and accessible. Whether you're an educator aiming to
          inspire or a student eager to explore,{" "}
          <span className=" font-extrabold underline">Fsegt-classroom </span>{" "}
          provides the tools you need to succeed. Join us today and transform
          the way you teach and learn. Experience the future of education with{" "}
          <span className=" font-extrabold underline">Fsegt-classroom </span>
          where knowledge meets innovation.
        </motion.p>{" "}
        <motion.div variants={ShowAnimation}>
          {/* Sigin in With Google*/}
          <SigninButton />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
