"use client";
import React from "react";
import Loadings from "react-spinners/HashLoader";
export default function Loading() {
  return (
    <div className="w-64 h-64">
      <Loadings
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#333"
      />
    </div>
  );
}
