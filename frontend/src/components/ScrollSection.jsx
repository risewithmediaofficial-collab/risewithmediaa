import { motion } from "framer-motion";

/**
 * Standard Rush Republic cubic-bezier easing curve
 * Smooth explosive start with ultra-soft deceleration
 */
export const rushEase = [0.16, 1, 0.3, 1];

/**
 * ScrollReveal / ScrollSection
 * Reveals once smoothly with GPU-accelerated motion to prevent flickering & layout shifts
 * Silky smooth duration and subtle initial offset
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
  const Component = motion[as] || motion.section;
  const fullScreenClass = fullScreen ? "section-fullscreen" : "";

  return (
    <Component
      id={id}
      style={style}
      className={`${fullScreenClass} ${className}`.trim()}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: rushEase,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * ScrollText: Text slide animation for headings, subtitles, and badges
 * Reveals once smoothly with soft natural glide and no flickering
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
  const Component = motion[as] || motion.div;
  const offset =
    direction === "up" ? 18
    : direction === "down" ? -18
    : direction === "left" ? 22
    : -22;
  const axis = direction === "left" || direction === "right" ? "x" : "y";

  return (
    <Component
      className={className}
      initial={{ opacity: 0, [axis]: offset }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.7,
        delay,
        ease: rushEase,
      }}
    >
      {children}
    </Component>
  );
}

/**
 * ScrollImage: Image & media scale/slide animation on scroll
 * Reveals once smoothly without flickering
 */
export function ScrollImage({
  children,
  className = "",
  delay = 0.08,
  scale = 0.97,
  amount = 0.08,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale, y: 14 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.75,
        delay,
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
