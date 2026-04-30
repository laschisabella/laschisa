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
      className="relative p-3 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-primary/20 cursor-pointer"
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
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full mx-auto max-w-6xl relative flex justify-between mt-4 px-4 h-[8vh] items-center z-50"
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
          <div className="gap-3 hidden md:flex">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button>
                <MenuIcon />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="w-full bg-background/95"
              align="end"
              sideOffset={10}
              avoidCollisions={false}
            >
              <div className="flex justify-between md:hidden p-3 gap-5">
                <ThemeToggle />
                <LanguageToggle />
              </div>
              <DropdownMenuSeparator className="bg-secondary/20 md:hidden" />
              {sections.map((id) => {
                const key = `nav.${id.toLowerCase()}` as NavKey;
                return (
                  <DropdownMenuItem
                    key={id}
                    className="py-2 text-lg text-gray-700 dark:text-gray-100"
                    asChild
                  >
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();

                        setOpen(false);

                        setTimeout(() => {
                          document.body.style.overflow = "";

                          const el = document.getElementById(id);
                          if (!el) return;

                          const y =
                            el.getBoundingClientRect().top +
                            window.pageYOffset -
                            80;

                          window.scrollTo({
                            top: y,
                            behavior: "smooth",
                          });
                        }, 50);
                      }}
                    >
                      {t(key)}
                    </a>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </motion.header>
  );
}
