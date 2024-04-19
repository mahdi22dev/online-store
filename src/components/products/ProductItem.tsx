import React from "react";

function ProductItem() {
  return (
    <div className="h-full rounded-xl border-2 p-5">
      <div className="h-full w-full ">
        <img
          alt="iphone 15 pro case"
          src={`https://images.ctfassets.net/xp3ehvbs6dy6/6OxuBIhxR2ojxHEfri2GyD/978fbd96e31e0f084abf4c526aacb4e9/2024-04-18_20-48-35_2716.png?w=700&h=700&fm=webp&q=80`}
          className="duration-350 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProductItem;
