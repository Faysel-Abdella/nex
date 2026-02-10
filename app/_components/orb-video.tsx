"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

const OrbVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [noAutoPlay, setNoAutoPlay] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.75;
    video.defaultMuted = true;

    // Attempt to play programmatically
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Autoplay started successfully!
          setLoaded(true);
        })
        .catch((error) => {
          // We still set loaded to true so the poster image shows
          // without an ugly play button over it.
          setNoAutoPlay(true);
          setLoaded(true);
        });
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
      {noAutoPlay ? (
        <img
          src={"/orb_clip_poster.webp"}
          className="w-full h-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          src={"/orb_clip.mp4"}
          onSuspend={() => console.log("suspended")}
          className={cn(
            "w-full h-full object-cover",
            "[&::-webkit-media-controls-start-playback-button]:hidden!",
            "[&::-webkit-media-controls-start-playback-button]:appearance-none! ",

            "pointer-events-none ",
            // Target the overlay play button
            "[&::-webkit-media-controls-overlay-play-button]:hidden!",
            "[&::-webkit-media-controls-overlay-play-button]:appearance-none!",
          )}
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          poster="/orb_clip_poster.webp"
        />
      )}
    </div>
  );
};

export default OrbVideo;
