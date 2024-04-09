"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
export default function Loading() {
  return (
    <div className="w-64 h-64">
      Loading{" "}
      <ClipLoader
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#fff"
      />
    </div>
  );
}
