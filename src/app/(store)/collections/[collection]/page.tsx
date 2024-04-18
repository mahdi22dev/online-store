import React from "react";

export default function page({ params }: { params: { collection: string } }) {
  return (
    <div>
      <h1>{params.collection}</h1>
    </div>
  );
}
