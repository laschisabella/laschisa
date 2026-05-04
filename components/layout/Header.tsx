"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { CodeXml, X, Menu, Download, MessageSquareCode } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

const sections = ["Work", "Stack", "Contact"] as const;
type Section = (typeof sections)[number];
type SectionLower = Lowercase<Section>;
type NavKey = `nav.${SectionLower}`;

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options = [
    { key: "light", label: "Light" },
    { key: "dark", label: "Dark" },
  ];

  return (
    <div className="flex bg-neutral-200 dark:bg-primary/20 rounded-full p-1">
      {options.map((opt) => {
        const active = theme === opt.key;

        return (
          <button
            key={opt.key}
            onClick={() => setTheme(opt.key as "light" | "dark")}
            className={`px-4 py-1.5 rounded-full text-sm transition
              ${
                active
                  ? "bg-white dark:bg-black text-black dark:text-white shadow"
                  : "text-neutral-600 dark:text-neutral-300"
              }
            `}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
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
  const { t, locale } = useI18n();

  const resumeUrl =
    locale === "pt"
      ? "https://drive.google.com/SEU_LINK_PT"
      : "https://drive.google.com/SEU_LINK_EN";
  return (
    <motion.header
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full mx-auto max-w-6xl relative flex justify-between mt-4 px-4 h-[8vh] items-center z-50"
    >
      <nav className="w-full flex justify-between gap-2 items-center px-4 py-2">
        <div className="text-secondary sm:text-lg tracking-widest uppercase font-bold flex gap-4 items-center select-none">
          <CodeXml size={30} className="text-accent/70" />
          <p>laschisa.dev</p>
        </div>
        <div className="flex gap-2 sm:gap-3 items-center">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <Button
              size="lg"
              variant={"accent"}
              className="text-[12px] uppercase tracking-widest flex gap-3 opacity-70"
            >
              Download resume <Download />
            </Button>
          </a>

          <Drawer direction="right">
            <DrawerTrigger className="p-2.5 bg-brand opacity-80 text-white rounded-md transition hover:opacity-60 cursor-pointer">
              <Menu size={18} />
            </DrawerTrigger>
            <DrawerContent className="bg-brand flex flex-col items-end gap-5 p-10">
              <DrawerClose>
                <DrawerTitle hidden>Menu</DrawerTitle>
                <div className="hover:bg-background/20 transition p-2 rounded-md cursor-pointer">
                  <X size={30} className="text-white" />
                </div>
              </DrawerClose>
              <div className="h-full w-full flex flex-col items-center justify-center">
                <div className="flex flex-col gap-5 mb-[12vh]">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <div className="flex flex-col gap-10 items-center uppercase tracking-widest font-bold text-lg text-white">
                  {sections.map((id) => {
                    const key = `nav.${id.toLowerCase()}` as NavKey;
                    return (
                      <a href={`#${id}`} key={id} className="hover:text-black/50 transition">
                        {t(key)}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="opacity-30 relative">
                <MessageSquareCode className="w-48 h-48" />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </motion.header>
  );
}
