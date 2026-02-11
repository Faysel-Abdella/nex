"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const OrbVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoPlayStarted, setAutoPlayStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure muted is set for autoplay policies
    video.defaultMuted = true;

    // Attempt to play programmatically (handles Low Power Mode check)
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Promise resolves = Video is playing = Fade out poster
          setAutoPlayStarted(true);
        })
        .catch((error) => {
          // Autoplay was prevented (e.g. Low Power Mode).
          // We swallow the error and leave autoPlayStarted as false.
          // Result: The user sees the static poster image.
        });
    }
  }, []);

  return (
    <div
      className={cn(
        "relative w-full aspect-square h-full transition duration-800 max-lg:scale-115 overflow-hidden",
        "mask-[radial-gradient(circle_at_center,black_100%,transparent_100%)]",
        "[-webkit-mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]",
      )}
    >
      <video
        ref={videoRef}
        src="/orb_clip.mp4"
        className={cn(
          "w-full h-full object-cover absolute inset-0",
          "[&::-webkit-media-controls-start-playback-button]:hidden!",
          "[&::-webkit-media-controls-start-playback-button]:appearance-none!",
          "[&::-webkit-media-controls-overlay-play-button]:hidden!",
          "[&::-webkit-media-controls-overlay-play-button]:appearance-none!",
          // Strict requirement: User cannot interact with video
          "pointer-events-none",
        )}
        muted
        loop
        playsInline
        autoPlay // React hydration safety
        controls={false}
        disablePictureInPicture
        poster="/orb_clip_poster.webp"
      />

      <img
        src="/orb_clip_poster.webp"
        alt=""
        className={cn(
          "w-full h-full object-cover absolute inset-0 transition-opacity duration-1000",
          autoPlayStarted ? "opacity-0" : "opacity-100",
        )}
      />
    </div>
  );
};

export default OrbVideo;
