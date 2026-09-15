import { useEffect, useRef } from "react";

/**
 * GravityDotsCanvas
 * High-performance, interactive physics-based dotted canvas background.
 * Dots form an elegant grid at rest. Moving the mouse over the hero section
 * creates an authentic gravitational pull that draws points toward the cursor
 * with elastic spring restoration and cyan luminous glows.
 */
export default function GravityDotsCanvas({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Grid configuration
    const spacing = 32; // Distance between dots in pixels
    const influenceRadius = 180; // Gravity pull radius around mouse
    const gravityStrength = 4.2; // Maximum pull acceleration
    const springStrength = 0.085; // Hooke's law spring back to origin
    const friction = 0.84; // Velocity damping (elastic oscillation)

    // Array of particle points
    let dots = [];

    // Mouse tracker (in canvas local coordinates)
    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
      targetActive: false,
    };

    // Initialize or resize dot grid
    const initGrid = () => {
      const parent = containerRef?.current || canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Populate dots
      dots = [];
      const cols = Math.ceil(width / spacing) + 1;
      const rows = Math.ceil(height / spacing) + 1;
      const offsetX = (width - (cols - 1) * spacing) / 2;
      const offsetY = (height - (rows - 1) * spacing) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const originX = offsetX + c * spacing;
          const originY = offsetY + r * spacing;
          dots.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            baseRadius: 1.5,
            currentRadius: 1.5,
            colorFactor: 0, // 0 = resting slate grey, 1 = brand cyan
          });
        }
      }
    };

    initGrid();

    // Mouse and Touch Event Listeners on the Hero container
    const parent = containerRef?.current || canvas.parentElement;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleMouseEnter = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
    };

    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove, { passive: true });
      parent.addEventListener("mouseleave", handleMouseLeave, { passive: true });
      parent.addEventListener("mouseenter", handleMouseEnter, { passive: true });
      parent.addEventListener("touchmove", handleTouchMove, { passive: true });
      parent.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    // Resize observer
    const resizeObserver = new ResizeObserver(() => {
      initGrid();
    });
    if (parent) resizeObserver.observe(parent);

    // Animation Loop
    let lastTime = performance.now();

    const render = (time) => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      const isMouseActive = mouse.active;
      const activeDots = [];

      // Update and draw each dot
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Gravitational force towards mouse
        if (isMouseActive) {
          const dx = mouse.x - dot.x;
          const dy = mouse.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < influenceRadius && dist > 1) {
            // Non-linear falloff (smooth gravitational pull)
            const proximity = 1 - dist / influenceRadius;
            const pull = proximity * proximity * gravityStrength;

            dot.vx += (dx / dist) * pull;
            dot.vy += (dy / dist) * pull;

            // Target color factor increases when close to cursor
            dot.colorFactor += (proximity - dot.colorFactor) * 0.25;
            dot.currentRadius += ((dot.baseRadius + proximity * 1.8) - dot.currentRadius) * 0.25;

            activeDots.push(dot);
          } else {
            dot.colorFactor += (0 - dot.colorFactor) * 0.08;
            dot.currentRadius += (dot.baseRadius - dot.currentRadius) * 0.08;
          }
        } else {
          dot.colorFactor += (0 - dot.colorFactor) * 0.08;
          dot.currentRadius += (dot.baseRadius - dot.currentRadius) * 0.08;
        }

        // Spring force returning dot to equilibrium origin
        const springX = (dot.originX - dot.x) * springStrength;
        const springY = (dot.originY - dot.y) * springStrength;

        dot.vx = (dot.vx + springX) * friction;
        dot.vy = (dot.vy + springY) * friction;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);

        if (dot.colorFactor > 0.02) {
          // Luminous brand cyan active glow
          const alpha = 0.45 + dot.colorFactor * 0.55;
          ctx.fillStyle = `rgba(18, 183, 212, ${alpha.toFixed(2)})`;
          ctx.fill();

          // Subtle cyan halo glow for highest intensity dots
          if (dot.colorFactor > 0.4) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.currentRadius * 2.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(18, 183, 212, ${(dot.colorFactor * 0.22).toFixed(2)})`;
            ctx.fill();
          }
        } else {
          // Resting subtle neutral grey dot
          ctx.fillStyle = "rgba(209, 213, 219, 0.75)"; // #d1d5db
          ctx.fill();
        }
      }

      // Draw subtle elastic gravitational connection web between nearest pulled dots
      if (activeDots.length > 1) {
        ctx.lineWidth = 0.75;
        const len = activeDots.length;
        for (let i = 0; i < len; i++) {
          const d1 = activeDots[i];
          for (let j = i + 1; j < len; j++) {
            const d2 = activeDots[j];
            const distSq = (d1.x - d2.x) ** 2 + (d1.y - d2.y) ** 2;
            const maxDist = spacing * 1.35;
            if (distSq < maxDist * maxDist) {
              const dist = Math.sqrt(distSq);
              const alpha = (1 - dist / maxDist) * 0.25 * Math.min(d1.colorFactor, d2.colorFactor);
              if (alpha > 0.01) {
                ctx.strokeStyle = `rgba(18, 183, 212, ${alpha.toFixed(3)})`;
                ctx.beginPath();
                ctx.moveTo(d1.x, d1.y);
                ctx.lineTo(d2.x, d2.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      // Draw faint gravitational cursor aura
      if (isMouseActive) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          influenceRadius * 0.75
        );
        gradient.addColorStop(0, "rgba(18, 183, 212, 0.08)");
        gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.03)");
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, influenceRadius * 0.75, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
        parent.removeEventListener("mouseenter", handleMouseEnter);
        parent.removeEventListener("touchmove", handleTouchMove);
        parent.removeEventListener("touchend", handleTouchEnd);
        resizeObserver.disconnect();
      }
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
