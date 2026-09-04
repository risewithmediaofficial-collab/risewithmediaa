import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ahkila",
    avatar: "A",
    avatarBg: "from-[#06b6d4] to-[#67e8f9]",
    rating: 5,
    text: "Within 3 months we went from 0 to 4 lakh in monthly revenue. The team just gets it — strategy, execution, everything.",
  },
  {
    name: "Saranya",
    avatar: "S",
    avatarBg: "from-[#0f172a] to-[#dff6ff]",
    rating: 5,
    text: "I was getting 45 leads a month. Now I get 10+ qualified leads monthly. The WhatsApp automation alone saved me hours.",
  },
  {
    name: "Prem Charlesr",
    avatar: "P",
    avatarBg: "from-[#67e8f9] to-[#06b6d4]",
    rating: 5,
    text: "I've hired agencies before — these guys are a completely different level.",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#06b6d4">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index, dir) => {
    setDirection(dir);
    setCurrent(index);
  };

  const prev = () => {
    goTo((current - 1 + testimonials.length) % testimonials.length, -1);
  };

  const next = () => {
    goTo((current + 1) % testimonials.length, 1);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const variants = {
    enter: (dir) => ({ x: dir * 80, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: (dir) => ({ x: dir * -80, opacity: 0, transition: { duration: 0.3 } }),
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-[28px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="bg-white border border-[#dff6ff] rounded-[28px] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-400 relative"
          >
            <StarRating count={testimonials[current].rating} />

            <p className="text-[#334155] text-base sm:text-lg leading-relaxed mt-5 mb-8 font-normal">
              "{testimonials[current].text}"
            </p>

            <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#dff6ff]/60">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].avatarBg} flex items-center justify-center text-white font-black text-sm shadow-sm`}>
                    {testimonials[current].avatar}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0f172a] text-[#06b6d4] flex items-center justify-center text-[11px] font-black border-2 border-white shadow-xs">
                    "
                  </div>
                </div>
                <div>
                  <p className="font-bold text-[#0f172a] text-sm sm:text-base">{testimonials[current].name}</p>
                  <p className="text-xs text-[#64748b]">{testimonials[current].role || "Verified Client"}</p>
                </div>
              </div>

              {/* Signature 3x3 dot matrix */}
              <div className="grid grid-cols-3 gap-1 opacity-25">
                {[...Array(9)].map((_, idx) => (
                  <span key={idx} className="w-1.5 h-1.5 rounded-full bg-[#0f172a]" />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8 px-2">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2.5 bg-[#06b6d4]" : "w-2.5 h-2.5 bg-[#dff6ff]"
                }`}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <motion.button
            onClick={prev}
            className="w-11 h-11 rounded-full bg-white border-2 border-[#0f172a] text-[#0f172a] shadow-[2px_2px_0px_#0f172a] hover:bg-[#f0fbff] flex items-center justify-center transition-all"
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </motion.button>
          <motion.button
            onClick={next}
            className="w-11 h-11 rounded-full bg-[#06b6d4] text-white border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] hover:bg-[#0891b2] flex items-center justify-center transition-all"
            whileTap={{ scale: 0.95 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}