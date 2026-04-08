"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";

const sections = ["About", "Work", "Stack", "Contact"] as const;
type Section = (typeof sections)[number];
type SectionLower = Lowercase<Section>;
type NavKey = `nav.${SectionLower}`;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800 cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg"
          >
            {isDark ? <Moon /> : <Sun />}
          </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function LanguageToggle() {
  const { changeLocale } = useI18n();

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLocale("en")}>EN</button>
      <button onClick={() => changeLocale("pt")}>PT</button>
    </div>
  );
}

export default function Header() {
  const active = useActiveSection(sections);
  const { t } = useI18n();

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
          {sections.map((id) => {
            const key = `nav.${id.toLowerCase()}` as NavKey;
            return (
              <li key={id} className="relative">
                <a
                  href={`#${id}`}
                  className={`px-2 py-1 ${
                    active === id ? "text-accent font-bold" : "text-primary"
                  }`}
                  onClick={() => handleClick(id)}
                >
                  {t(key)}
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
            );
          })}
        </ul>
      </nav>
      <div className="flex gap-3 items-center">
        <LanguageToggle />
        <ThemeToggle />
        <Button size="lg" variant="default">
          Download Resume
        </Button>
      </div>
    </header>
  );
}