import { useEffect, useRef, useState } from "react";

export default function ViewportVideo({ src, className = "" }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true);
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, { rootMargin: "180px 0px", threshold: 0.15 });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad) videoRef.current?.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      className={className}
      aria-label="Client project reel"
    />
  );
}
