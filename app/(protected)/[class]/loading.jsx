"use client";
import React from "react";
import { RingLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="flex items-center justify-center w-full h-svh">
      <RingLoader color="#009cff" />
    </div>
  );
}
