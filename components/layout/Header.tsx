"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const sections = ["About", "Work", "Stack", "Contact"];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg"
          >
           <Moon />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg"
          >
            <Sun />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Header() {
  const active = useActiveSection(sections);
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="w-full flex justify-between px-10 md:px-20 h-[8vh] items-center fixed bg-background z-50">
      <div className="text-primary/70 text-sm tracking-widest uppercase font-bold">
        laschisa.dev
      </div>
      <nav>
        <ul className="flex space-x-6">
          {sections.map((id) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`px-2 py-1 ${
                  active === id ? "text-accent font-bold" : "text-primary"
                }`}
                onClick={() => handleClick(id)}
              >
                {id}
              </a>

              {active === id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-accent"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-3 items-center">
        <div>lang</div>
        <ThemeToggle />
        <Button size="lg" variant="default">
          Download Resume
        </Button>
      </div>
    </header>
  );
}
