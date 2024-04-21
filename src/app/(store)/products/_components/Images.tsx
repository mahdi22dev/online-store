"use client";
import { useState } from "react";

const gellary = [
  { id: 1, img: "1" },
  { id: 2, img: "2" },
  { id: 3, img: "3" },
];
function Images() {
  const [selected, setSelected] = useState(0);
  const [images, setImages] = useState("");
  const handleChange = (index: number) => {
    setSelected(index);
  };
  return (
    <div>
      <div>{gellary[selected].img}</div>
      <div>
        {gellary.map((img) => {
          return (
            <div key={img.id} onClick={() => handleChange(img.id - 1)}>
              {img.img}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Images;
