import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Hook to detect mobile screens (< 768px)
 * Used to optimize animation duration, remove delay, and reduce offsets on touch devices
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}

/**
 * Standard Rush Republic cubic-bezier easing curve
 * Smooth explosive start with ultra-soft deceleration
 */
export const rushEase = [0.16, 1, 0.3, 1];

/**
 * ScrollReveal / ScrollSection
 * Reveals once smoothly with GPU-accelerated motion to prevent flickering & layout shifts
 * On mobile: eliminates delays and uses snappy durations so touch scrolling never feels delayed
 */
export function ScrollReveal({
  children,
  className = "",
  id,
  style,
  delay = 0,
  as = "section",
  amount = 0.08,
  once = true,
  fullScreen = false,
}) {
  const isMobile = useIsMobile();
  const Component = motion[as] || motion.section;
  const fullScreenClass = fullScreen ? "section-fullscreen" : "";

  return (
    <Component
      id={id}
      style={style}
      className={`${fullScreenClass} ${className}`.trim()}
      initial={{ opacity: 0, y: isMobile ? 8 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: isMobile ? 0.01 : amount }}
      transition={{
        duration: isMobile ? 0.35 : 0.65,
        delay: isMobile ? 0 : delay,
        ease: rushEase,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * ScrollText: Text slide animation for headings, subtitles, and badges
 * Reveals once smoothly with soft natural glide and zero mobile delay
 */
export function ScrollText({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as = "div",
  amount = 0.08,
  once = true,
}) {
  const isMobile = useIsMobile();
  const Component = motion[as] || motion.div;
  const offset = isMobile
    ? (direction === "up" ? 8 : direction === "down" ? -8 : direction === "left" ? 10 : -10)
    : (direction === "up" ? 18 : direction === "down" ? -18 : direction === "left" ? 22 : -22);
  const axis = direction === "left" || direction === "right" ? "x" : "y";

  return (
    <Component
      className={className}
      initial={{ opacity: 0, [axis]: offset }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once, amount: isMobile ? 0.01 : amount }}
      transition={{
        duration: isMobile ? 0.35 : 0.65,
        delay: isMobile ? 0 : delay,
        ease: rushEase,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * ScrollImage: Image & media scale/slide animation on scroll
 * Reveals once smoothly without flickering or mobile delay
 */
export function ScrollImage({
  children,
  className = "",
  delay = 0.08,
  scale = 0.97,
  amount = 0.08,
  once = true,
}) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: isMobile ? 0.99 : scale, y: isMobile ? 6 : 14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once, amount: isMobile ? 0.01 : amount }}
      transition={{
        duration: isMobile ? 0.35 : 0.7,
        delay: isMobile ? 0 : delay,
        ease: rushEase,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function ScrollSection(props) {
  return <ScrollReveal as="section" {...props} />;
}
