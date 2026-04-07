"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const sections = ["About", "Work", "Stack", "Contact"];

export default function Header() {
  const active = useActiveSection(sections);
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="w-full flex justify-between px-10 md:px-20 h-[8vh] items-center fixed bg-background z-50">
      <div className="text-primary/70 text-sm tracking-widest uppercase font-bold">laschisa.dev</div>
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
        <div>mode</div>
        <Button size="lg" variant="default">
          Download Resume
        </Button>
      </div>
    </header>
  );
}
