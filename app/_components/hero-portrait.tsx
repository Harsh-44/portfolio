"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";

type HeroPortraitProps = {
  image: StaticImageData;
  alt: string;
  areaRatio?: number;
  priority?: boolean;
};

function getPortraitWidth(
  viewportWidth: number,
  viewportHeight: number,
  imageAspectRatio: number,
  areaRatio: number,
) {
  const viewportArea = viewportWidth * viewportHeight;
  const targetArea = viewportArea * areaRatio;
  const width = Math.sqrt(targetArea * imageAspectRatio);

  return Math.max(260, Math.min(width, 640));
}

export function HeroPortrait({
  image,
  alt,
  areaRatio = 0.2,
  priority = false,
}: HeroPortraitProps) {
  const imageAspectRatio = image.width / image.height;
  const [width, setWidth] = useState(() =>
    getPortraitWidth(1440, 900, imageAspectRatio, areaRatio),
  );

  useEffect(() => {
    const updateSize = () => {
      setWidth(
        getPortraitWidth(
          window.innerWidth,
          window.innerHeight,
          imageAspectRatio,
          areaRatio,
        ),
      );
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [areaRatio, imageAspectRatio]);

  return (
    <div
      className="relative"
      style={{ width: `${width}px` }}
    >
      <div
        className="absolute h-full w-full bg-black/4"
        style={{
          bottom: "calc(-0.7rem - 0.2vw)",
          left: "calc(-0.7rem - 0.2vw)",
        }}
      />
      <div className="relative overflow-hidden border border-black/10 bg-[#d9d4cd]">
        <Image
          src={image}
          alt={alt}
          className="h-auto w-full object-cover grayscale"
          priority={priority}
          sizes={`${Math.round(width)}px`}
        />
      </div>
    </div>
  );
}
