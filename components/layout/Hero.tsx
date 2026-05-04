"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import me from "@/public/11bc6.png";
import Image from "next/image";
import { ArrowRight, Atom, Braces, FileArchive, Webhook } from "lucide-react";

function Photo() {
  return (
    <div className="relative lg:flex lg:bottom-10 items-center justify-center">
      <div className="relative w-40 h-40 lg:w-95 lg:h-120 rounded-2xl">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl"
        />
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: -24, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false }}
          className="absolute top-6 w-full h-full bg-secondary/20 rounded-2xl"
        />
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 24, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
          className="absolute top-10 w-full h-full bg-accent/20 rounded-2xl"
        />
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 12, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="absolute inset-0"
        >
          <Image
            src={me}
            alt="Profile Picture"
            fill
            className="object-cover rounded-2xl opacity-85"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="About"
      className="min-h-[85vh] lg:min-h-[88vh] flex flex-col-reverse lg:flex-row gap-20 justify-center items-center px-5"
    >
      <div className="flex flex-col gap-5 max-w-2xl text-center lg:text-left">
        <motion.span
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="hidden lg:block uppercase text-xs text-primary/80 font-bold tracking-widest"
        >
          Full Stack Developer | React, Node.js, System Integration
        </motion.span>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-3xl md:text-6xl font-semibold leading-tight"
        >
          <h1>
            Hi, I&apos;m Isabella <span className="text-primary">Laschi</span>.
          </h1>
        </motion.div>

        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-foreground/80 max-w-lg text-base md:text-lg"
        >
          <p>
            I build and improve production systems, focusing on integrations,
            maintainability and long-term reliability.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="text-foreground/80 hidden lg:block"
        >
          <ul className="flex flex-col gap-2 text-sm md:text-base relative left-8">
            <li className="flex gap-5 items-center">
              <Webhook size={18} className="text-accent" /> API integrations
            </li>
            <li className="flex gap-5 items-center">
              <Braces size={18} className="text-secondary" /> Legacy systems
            </li>
            <li className="flex gap-5 items-center">
              <Atom size={18} className="text-primary" /> Performance optimization
            </li>
            <li className="flex gap-5 items-center">
              <FileArchive size={18} className="text-accent" /> System reliability
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3 lg:my-10"
        >
          <Button
            size="xl"
            variant="default"
            className="uppercase tracking-widest text-xs"
            onClick={() =>
              document.getElementById("Work")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            explore work
            <ArrowRight className="ml-0 md:ml-2" />
          </Button>

          <Button
            size="xl"
            variant="outline"
            className="uppercase tracking-widest text-xs"
            onClick={() =>
              document.getElementById("Contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            get in touch
          </Button>
        </motion.div>
      </div>
      <Photo />
    </section>
  );
}
