import { motion } from "framer-motion";

/**
 * Standard Rush Republic cubic-bezier easing curve
 * Smooth explosive start with ultra-soft deceleration
 */
export const rushEase = [0.16, 1, 0.3, 1];

/**
 * ScrollReveal / ScrollSection
 * Triggers animations both scrolling down and up (once: false)
 * Silky smooth duration and subtle initial offset
 */
export function ScrollReveal({
  children,
  className = "",
  id,
  style,
  delay = 0,
  as = "section",
  amount = 0.05,
  once = false,
}) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      id={id}
      style={style}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.8,
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
 * Re-triggers on both scroll down and scroll up with soft natural glide
 */
export function ScrollText({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as = "div",
  amount = 0.05,
}) {
  const Component = motion[as] || motion.div;
  const offset =
    direction === "up" ? 22
    : direction === "down" ? -22
    : direction === "left" ? 28
    : -28;
  const axis = direction === "left" || direction === "right" ? "x" : "y";

  return (
    <Component
      className={className}
      initial={{ opacity: 0, [axis]: offset }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: false, amount }}
      transition={{
        duration: 0.8,
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
 * Re-triggers on both scroll down and scroll up
 */
export function ScrollImage({
  children,
  className = "",
  delay = 0.08,
  scale = 0.96,
  amount = 0.05,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale, y: 18 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{
        duration: 0.85,
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
