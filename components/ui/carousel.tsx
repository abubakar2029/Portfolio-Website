"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselApi = EmblaCarouselType;

type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  plugins?: any[];
  setApi?: (api: CarouselApi) => void;
};

export function Carousel({
  children,
  className = "",
  plugins = [],
  setApi,
  ...props
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    //   speed: 4, // 👈 smooth slow sliding
      align: "start",
    },
    plugins
  );

  React.useEffect(() => {
    if (emblaApi && setApi) setApi(emblaApi);
  }, [emblaApi]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      ref={emblaRef}
      {...props}
    >
      {children}
    </div>
  );
}

export function CarouselContent({ children }: { children: React.ReactNode }) {
  return <div className="flex">{children}</div>;
}

export function CarouselItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-w-full md:min-w-1/2 px-2 ${className}`}>{children}</div>
  );
}

export function CarouselPrevious({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white border shadow transition hover:bg-gray-50 ${className}`}
    >
      <ChevronLeft size={16} />
    </button>
  );
}

export function CarouselNext({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white border shadow transition hover:bg-gray-50 ${className}`}
    >
      <ChevronRight size={16} />
    </button>
  );
}
