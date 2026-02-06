"use client";
import React, { useEffect, useRef } from "react";

const OrbVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);
  return (
    <div className="relative w-full aspect-square  max-lg:scale-115   overflow-hidden ">
      <video
        ref={videoRef}
        src="/orb_clip_mobile.webm"
        className="w-full h-full object-cover  
             mask-[radial-gradient(circle_at_center,black_60%,transparent_100%)]
             [-webkit-mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]"
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
