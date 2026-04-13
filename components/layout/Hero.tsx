"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section
      id="About"
      className="min-h-[92vh] md:min-h-screen flex flex-col justify-between px-5 md:px-20 overflow-hidden"
    >
      <div className="flex flex-col gap-3 items-center justify-center flex-1 min-w-0">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="uppercase text-xs text-primary/80 font-bold tracking-widest"
        >
          senior systems architect
        </motion.span>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-4xl md:text-6xl font-semibold text-center my-5"
        >
          <h1>Engineering Scalable</h1>
          <h1 className="text-primary">Digital Systems.</h1>
        </motion.div>

        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-center md:text-lg"
        >
          <h4>
            Specializing in high-performance infrastructure and distributed
            architectures.
          </h4>
          <h4>
            I build systems that process millions of transactions while
            maintaining zero-downtime reliability.
          </h4>
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex flex-wrap justify-center items-center my-5 gap-3"
        >
          <Button
            size="xl"
            variant="outline"
            className="z-10"
            onClick={() =>
              document.getElementById("Contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Get in touch
          </Button>

          <Button
            size="xl"
            variant="default"
            className="z-10"
            onClick={() =>
              document.getElementById("Work")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
