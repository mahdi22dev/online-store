import Collections from "@/app/(app)/home/_components/Collections";
import React from "react";

export default function page() {
  return (
    <div>
      {/* @ts-expect-error */}
      <Collections />
    </div>
  );
}
