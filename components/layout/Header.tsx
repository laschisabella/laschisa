"use client";

import { motion } from "framer-motion";
import { CodeXml } from "lucide-react";
import LanguageToggle from "../LanguageToggle";
import ThemeToggle from "../ThemeToggle";
import ResumeButton from "../ResumeButton";

export default function Header() {

  return (
    <motion.header
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full mx-auto max-w-6xl relative flex justify-between mt-4 px-4 items-center z-50"
    >
      <nav className="w-full flex flex-col-reverse md:flex-row justify-between gap-2 items-center px-4 py-2">
        <div className="text-secondary tracking-widest uppercase font-bold flex gap-4 items-center select-none">
          <CodeXml size={20} className="text-accent/70" />
          <p>laschisa.dev</p>
        </div>
        <div className="flex gap-2 sm:gap-3 items-center">
          <div className="flex gap-4 lg:gap-2 mb-20 md:mb-0">
            <ThemeToggle />
            <LanguageToggle />
            <ResumeButton />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
