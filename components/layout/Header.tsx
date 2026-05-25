"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/providers/ThemeProvider";
import { CodeXml, X, Menu, Download, Badge } from "lucide-react";
import { useI18n } from "@/hooks/useI18n";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import AnimatedToggle from "../AnimatedToggle";
import { useState } from "react";

const sections = ["Work", "Stack", "Contact"] as const;
type Section = (typeof sections)[number];
type SectionLower = Lowercase<Section>;
type NavKey = `header.nav.${SectionLower}`;

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <AnimatedToggle
      value={theme}
      onChange={(val) => setTheme(val as "light" | "dark")}
      options={[
        { key: "light", label: "Light" },
        { key: "dark", label: "Dark" },
      ]}
    />
  );
}

function LanguageToggle() {
  const { locale, changeLocale } = useI18n();

  return (
    <AnimatedToggle
      value={locale}
      onChange={(lang) => changeLocale(lang)}
      options={[
        { key: "en", label: "EN" },
        { key: "pt", label: "PT" },
      ]}
    />
  );
}

function ResumeButton({ className }: { className?: string }) {
  const { t, locale } = useI18n();
  const resumeUrl =
    locale === "pt"
      ? "https://docs.google.com/document/d/1mFc209OmdqWt1tfXlaP8-5iXgYPLLY6DNKTVpGFxGRs"
      : "https://docs.google.com/document/d/11Wh6Gvj_PstleGsrQWomtbenJlADd0uCirroDvwajt8";

  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={` ` + className}
    >
      <Button
        size="lg"
        variant={"accent"}
        className="text-[12px] uppercase tracking-widest flex gap-3 opacity-70"
      >
        {t("header.downloadResume")} <Download />
      </Button>
    </a>
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
        <div className="text-secondary sm:text-lg tracking-widest uppercase font-bold flex gap-4 items-center select-none">
          <CodeXml size={30} className="text-accent/70" />
          <p>laschisa.dev</p>
        </div>
        <div className="flex gap-2 sm:gap-3 items-center">
          <ResumeButton className="hidden lg:block" />

          <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger className="p-2.5 bg-brand opacity-80 text-white rounded-md transition hover:opacity-60 cursor-pointer">
              <Menu size={18} />
            </DrawerTrigger>
            <DrawerContent
              onCloseAutoFocus={(e) => e.preventDefault()}
              className="bg-brand flex flex-col items-end gap-5 p-10"
            >
              <DrawerClose>
                <DrawerTitle hidden>Menu</DrawerTitle>
                <div className="hover:bg-background/20 transition p-2 rounded-md cursor-pointer mb-10">
                  <X size={30} className="text-white" />
                </div>
              </DrawerClose>

              <div className="h-[60vh] w-full flex flex-col items-center justify-center">
                <div className="flex flex-col gap-2 lg:gap-5 mb-[12vh] pt-5">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
                <div className="flex flex-col gap-10 mb-8 lg:mb-0 items-center uppercase tracking-widest font-bold text-lg text-white">
                  {sections.map((id) => {
                    const key = `header.nav.${id.toLowerCase()}` as NavKey;
                    return (
                      <a
                        href={`#${id}`}
                        key={id}
                        onClick={(e) => {
                          e.preventDefault();

                          document
                            .getElementById(id)
                            ?.scrollIntoView({ behavior: "smooth" });

                          setOpen(false);
                        }}
                      >
                        {t(key)}
                      </a>
                    );
                  })}
                  <a
                    href={`#`}
                    className="hover:text-black/50 transition text-center"
                  >
                    {t("header.downloadResume")}
                  </a>
                </div>
              </div>
              <div className="relative test scale-150 -bottom-50 -right-50">
                <Badge
                  size={350}
                  className="absolute -right-8 -bottom-50 opacity-10"
                />
                <Badge
                  size={260}
                  className="absolute right-3 -bottom-40 opacity-10"
                />
                <Badge
                  size={200}
                  className="absolute right-10 -bottom-36 opacity-10"
                />
                <Badge
                  size={160}
                  className="absolute right-15 -bottom-36 opacity-10"
                />
                <Badge
                  size={130}
                  className="absolute right-18 -bottom-36 opacity-10"
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </motion.header>
  );
}
