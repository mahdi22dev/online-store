import React from "react";

function SectionTitle({ text }: { text: string }) {
  return (
    <p className="text-center font-poppins text-5xl font-bold capitalize">
      {text}
    </p>
  );
}

export default SectionTitle;
