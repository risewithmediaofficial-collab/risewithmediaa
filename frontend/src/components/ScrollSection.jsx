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
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: rushEase },
  },
};

/**
 * ScrollReveal / ScrollSection
 * Smooth, viewport-triggered scroll entrance without layout shifting
 */
export function ScrollReveal({
  children,
  className = "",
  id,
  style,
  delay = 0,
  as = "section",
}) {
  const Component = motion[as] || motion.section;

  return (
    <Component
      id={id}
      style={style}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
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

export default function ScrollSection(props) {
  return <ScrollReveal as="section" {...props} />;
}
