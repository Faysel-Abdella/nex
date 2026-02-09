"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

const OrbVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.78;
    }
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full aspect-square  opacity-0 transition duration-500  max-lg:scale-115   overflow-hidden  mask-[radial-gradient(circle_at_center,black_60%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]",
        loaded && "opacity-100",
      )}
    >
      <video
        ref={videoRef}
        src="/orb_clip-2.webm"
        className={cn("w-full h-full object-cover ")}
        autoPlay
        muted
        loop
        playsInline
        poster="/orb_clip_poster.webp"
      />
    </div>
  );
};

export default OrbVideo;
