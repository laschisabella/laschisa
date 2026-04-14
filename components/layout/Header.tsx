"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
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
  const active = useActiveSection(sections);
  const { t } = useI18n();

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full max-w-7xl relative md:fixed top-2 md:top-0 md:left-1/2 md:-translate-x-1/2 flex justify-between px-4 sm:px-6 md:px-12 lg:px-20 h-[8vh] items-center z-50"
      >
        <nav className="flex gap-6 items-center px-4 py-2 rounded-xl backdrop-blur-2xl">
          <div className="text-primary/70 text-xs sm:text-sm tracking-widest uppercase font-bold flex gap-2 sm:gap-3 items-center relative top-0.5">
            <CodeXml className="text-accent/70" />
            <p>laschisa.dev</p>
          </div>

          <ul className="hidden lg:flex space-x-3">
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
                        damping: 25,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex gap-2 sm:gap-3 items-center">
          <LanguageToggle />
          <ThemeToggle />

          <Button size="lg" variant="default" className="hidden lg:inline-flex">
            Download Resume
          </Button>

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
                  <DropdownMenuItem
                    key={id}
                    className="py-2"
                    onSelect={() => {
                      const el = document.getElementById(id);
                      if (!el) return;

                      setTimeout(() => {
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 0);
                    }}
                  >
                    {t(key)}
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
      </motion.header>
    </>
  );
}
