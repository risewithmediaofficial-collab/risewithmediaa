import { motion } from "framer-motion";

/**
 * ScrollReveal / ScrollSection
 * Provides a clean, snappy "Boom Swipe" scroll animation on downwards and upwards scroll.
 * Animates into view with a subtle scale pop and upward slide, and reverses when leaving the viewport.
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
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1], // snappy cubic deceleration
      }}
    >
      {children}
    </Component>
  );
}

export default function ScrollSection(props) {
  return <ScrollReveal as="section" {...props} />;
}
