import { PhonearmomorBanner } from "@/__generated__/graphql";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function BannerItem({ item }: { item: PhonearmomorBanner }) {
  return (
    <div className="relative h-[700px] w-full ">
      <img
        src={`${item?.banner?.url}`}
        alt="a"
        className="absolute bottom-0 left-0 right-0 top-0 rounded"
      />
      <div className="absolute bottom-[20%] right-[35%] flex flex-col gap-4 font-semibold capitalize md:bottom-[50%] md:right-[80%]">
        <p className="text-lg text-white">{item.title}</p>
        <Button variant={"outline"} size={"lg"} asChild>
          <Link href={"/" + item.destantion}>{item.buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}

export default BannerItem;
