import React from "react";
import { Separator } from "../ui/separator";

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <p className="text-center font-poppins text-5xl font-bold capitalize">
        {text}
      </p>
      <Separator className="mx-auto mt-5 w-[50vw] bg-black" />
    </div>
  );
}

export default SectionTitle;
