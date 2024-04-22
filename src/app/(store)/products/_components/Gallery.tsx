"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Images = [
  { id: 1, img: "1" },
  { id: 2, img: "2" },
  { id: 3, img: "3" },
];
export function Gallery({ Images }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full lg:w-2/4">
      <Carousel setApi={setApi} className="max-w-3xl">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="">
                <CardContent className="p-5">
                  <LazyLoadImage
                    alt={"iPhone 15 pro"}
                    src={`https://images.ctfassets.net/xp3ehvbs6dy6/4PaTWj4YgCfyFqKu0U1UoB/15eb68ecc21f93f7605ddec8cb21f357/LadybugsPersonalisedMagSafeiPhoneCase.jpg?w=700&h=700&fm=webp&q=80`}
                    className="duration-350 h-full w-full object-cover"
                    threshold={10}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-5 flex gap-5 py-2 text-center text-sm text-muted-foreground">
        {Images.map((img) => {
          return (
            <div
              className={`rounded ${current == img.id && "border-4 border-foreground"}`}
            >
              <LazyLoadImage
                alt={"iPhone 15 pro"}
                src={`https://images.ctfassets.net/xp3ehvbs6dy6/4PaTWj4YgCfyFqKu0U1UoB/15eb68ecc21f93f7605ddec8cb21f357/LadybugsPersonalisedMagSafeiPhoneCase.jpg?w=50&h=50&fm=webp&q=80`}
                className="duration-350 h-24 w-24 cursor-pointer rounded object-cover"
                threshold={10}
                onClick={() => api?.scrollTo(img.id - 1)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
