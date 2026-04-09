import {
  useInView,
  useMotionValue,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ to }: { to: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplay(Math.floor(latest));
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, to, { duration: 1 });
      return controls.stop;
    } else {
      motionValue.set(0);
    }
  }, [inView, to, motionValue]);

  return <span ref={ref}>{display}</span>;
}