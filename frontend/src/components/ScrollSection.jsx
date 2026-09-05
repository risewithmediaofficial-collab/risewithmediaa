import { motion } from "framer-motion";

/**
 * Standard Rush Republic cubic-bezier easing curve
 * Smooth explosive start with ultra-soft deceleration
 */
export const rushEase = [0.16, 1, 0.3, 1];

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: rushEase },
  },
};

export const staggerContainerVariants = (stagger = 0.08, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const scalePopVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: rushEase },
  },
};

/**
 * Mobile-safe viewport config:
 * Uses a very low `amount` (0.05) so animations fire as soon as
 * just 5% of the element enters the viewport — critical for mobile
 * where sections can be taller than the screen.
 */
const mobileViewport = { once: false, amount: 0.05 };

/**
 * ScrollReveal / ScrollSection
 * Triggers animations both scrolling down and up (once: false)
 * Mobile-safe: low threshold so tall sections always animate
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
      initial={{ opacity: 0, y: 28 }}
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
 * Re-triggers on both scroll down and scroll up
 * Mobile-safe: triggers when just 5% of element is in view
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
    direction === "up" ? 30
    : direction === "down" ? -30
    : direction === "left" ? 40
    : -40;
  const axis = direction === "left" || direction === "right" ? "x" : "y";

  return (
    <Component
      className={className}
      initial={{ opacity: 0, [axis]: offset }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: false, amount }}
      transition={{
        duration: 0.65,
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
 * Mobile-safe: triggers at 5% visibility
 */
export function ScrollImage({
  children,
  className = "",
  delay = 0.1,
  scale = 0.94,
  amount = 0.05,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount }}
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
