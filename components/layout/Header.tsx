"use client";

import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { CodeXml, Moon, Sun, MenuIcon } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const sections = ["Work", "Stack", "Contact"] as const;
type Section = (typeof sections)[number];
type SectionLower = Lowercase<Section>;
type NavKey = `nav.${SectionLower}`;

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800 cursor-pointer"
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

function LanguageToggle() {
  const { locale, changeLocale } = useI18n();
  const [active, setActive] = useState<"en" | "pt">(locale);

  const handleChange = (lang: "en" | "pt") => {
    setActive(lang);
    changeLocale(lang);
  };

  return (
    <div className="relative flex w-fit rounded-full bg-muted p-1">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute top-1 bottom-1 w-1/2 rounded-full bg-secondary/20 shadow"
        style={{ left: active === "en" ? "4px" : "calc(47%)" }}
      />

      <button
        onClick={() => handleChange("en")}
        className={`relative z-10 px-3 py-1 text-sm cursor-pointer ${
          active === "en" ? "text-primary font-bold" : "text-muted-foreground"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => handleChange("pt")}
        className={`relative z-10 px-3 py-1 text-sm cursor-pointer ${
          active === "pt" ? "text-primary font-bold" : "text-muted-foreground"
        }`}
      >
        PT
      </button>
    </div>
  );
}

export default function Header() {
  const { t } = useI18n();

  return (
    <motion.header
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full mx-auto max-w-6xl relative flex justify-between px-4 h-[8vh] items-center z-50"
    >
      <nav className="w-full flex justify-between gap-2 items-center px-4 py-2">
        <div className="text-secondary text-xs sm:text-sm tracking-widest uppercase font-bold flex gap-2 items-center select-none">
          <CodeXml className="text-accent/70" />
          <p>laschisa.dev</p>
        </div>

        <ul className="hidden lg:flex space-x-3">
          {sections.map((id) => {
            const key = `nav.${id.toLowerCase()}` as NavKey;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="px-2 py-1 text-secondary hover:text-accent transition"
                >
                  {t(key)}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex gap-2 sm:gap-3 items-center">
        <LanguageToggle />
        <ThemeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="lg:hidden">
            <Button>
              <MenuIcon />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-46 bg-background/95 relative top-2 right-4"
            align="start"
          >
            {sections.map((id) => {
              const key = `nav.${id.toLowerCase()}` as NavKey;
              return (
                <DropdownMenuItem key={id} asChild>
                  <a href={`#${id}`}>{t(key)}</a>
                </DropdownMenuItem>
              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-center">
              <Button size="sm" variant="default">
                Download Resume
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      </nav>

      
    </motion.header>
  );
}