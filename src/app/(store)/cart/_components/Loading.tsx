"use client";
import React from "react";
import jsonfile from "../../../../../public/cart-loading3.json";
import { useLottie } from "lottie-react";
export default function Loading() {
  const options = {
    animationData: jsonfile,
    loop: true,
  };
  // animation
  const { View } = useLottie(options);
  return <div className="w-64 h-64">{View}</div>;
}
