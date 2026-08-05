import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

function AnimatedCounter({ value, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frameId;
    const startedAt = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    };

    frameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameId);
  }, [duration, isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;

