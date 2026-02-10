"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

const OrbVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.playbackRate = 0.75;
      // FIX 1: Safari requires defaultMuted to be true for autoplay to work reliably
      videoRef.current.defaultMuted = true;
    }
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full aspect-square h-full opacity-0 transition duration-800 max-lg:scale-115 overflow-hidden mask-[radial-gradient(circle_at_center,black_60%,transparent_100%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]",
        loaded && "opacity-100",
      )}
    >
      <video
        ref={videoRef}
        src={"/orb_clip.mp4"}
        className={cn(
          "w-full h-full object-cover",
          "[&::-webkit-media-controls-start-playback-button]:hidden!",
          "[&::-webkit-media-controls-start-playback-button]:appearance-none! ",

          "pointer-events-none ",
          // Target the overlay play button
          "[&::-webkit-media-controls-overlay-play-button]:hidden!",
          "[&::-webkit-media-controls-overlay-play-button]:appearance-none!",
        )}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        poster="/orb_clip_poster.webp"
      />
    </div>
  );
};

export default OrbVideo;
