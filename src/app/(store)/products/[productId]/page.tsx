import React from "react";
import { Gallery } from "../_components/Gallery";

const Images = [
  { id: 1, img: "1" },
  { id: 2, img: "2" },
  { id: 3, img: "3" },
];

function page({ params }: { params: { productId: string } }) {
  return (
    <main className="min-h-screen w-full p-5 md:px-24 md:py-10">
      <h1>Breadcrumb</h1>
      <div className="w-full items-center justify-between gap-16 lg:flex">
        <Gallery Images={Images} />
        <div className="w-full lg:w-2/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officiis,
          omnis illum maiores debitis aliquam cupiditate laboriosam numquam,
          corrupti, facilis nesciunt consectetur reiciendis tenetur minima modi
          voluptatum praesentium deserunt molestiae impedit veritatis distinctio
          delectus odio soluta! Reprehenderit quia, neque architecto voluptate
          illum nostrum aliquam ad impedit commodi dignissimos rem veniam
          exercitationem possimus et voluptates, qui optio aperiam similique
          ipsa voluptas modi dolore! A ipsum sint minima autem eum temporibus
          vel porro quam soluta omnis ut, maxime nulla esse nesciunt
          exercitationem. Repellendus illo animi mollitia vel eius deleniti,
          corporis nesciunt atque perspiciatis, molestiae nisi maiores quos quam
          odit rem commodi sapiente.
        </div>
      </div>
    </main>
  );
}

export default page;
