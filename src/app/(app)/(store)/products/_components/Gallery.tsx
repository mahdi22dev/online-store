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
import { LazyLoadImage } from "react-lazy-load-image-component";

export function Gallery({
  Images,
}: {
  Images:
    | ({
        __typename?: "Asset" | undefined;
        url?: string | null | undefined;
      } | null)[]
    | undefined;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full lg:w-2/4">
      <Carousel setApi={setApi} className="max-w-[700px]">
        <CarouselContent>
          {Images?.map((img, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-5 md:min-h-[700px]">
                  <LazyLoadImage
                    alt={"iPhone 15 pro"}
                    src={`${img?.url}?w=600&h=600&fm=webp&q=80`}
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
        {Images?.map((img, index) => {
          return (
            <div
              className={`rounded  ${current == index + 1 ? "border-4 border-foreground opacity-100" : "border border-foreground  opacity-20"}`}
            >
              <LazyLoadImage
                alt={"iPhone 15 pro"}
                src={`${img?.url}?w=50&h=50&fm=webp&q=80`}
                className="duration-350 h-24 w-24 cursor-pointer rounded object-cover"
                threshold={10}
                onClick={() => api?.scrollTo(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
