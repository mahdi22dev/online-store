"use client";
import React from "react";
import jsonfile from "../../../../../public/cart-loading4.json";
import { useLottie } from "lottie-react";
export default function Loading() {
  const options = {
    animationData: jsonfile,
    loop: true,
  };

  const { View } = useLottie(options);
  return <div className="w-64 h-64">{"loading items..."}</div>;
}
