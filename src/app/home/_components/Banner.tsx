"use client";

import { GetContentHomeBannersQuery } from "@/__generated__/graphql";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Banner({ data }: { data: GetContentHomeBannersQuery }) {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent className="w-[1000px] bg-red-50">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="w-[1000px]">
              <div className="w-[1000px] p-1">
                <Card className="w-[1000px] bg-black text-white">
                  <CardContent className=" flex aspect-square w-[1000px] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Banner;
