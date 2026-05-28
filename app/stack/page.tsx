"use client";

import {
  ChevronRightCircle,
  ChartNoAxesCombined as Charts,
  PaintBucketIcon,
  ServerCogIcon,
} from "lucide-react";
import Image from "next/image";
import me from "@/public/me.png";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import { useI18n } from "@/hooks/useI18n";
import { I18nContextType } from "@/providers/I18nProvider";

type StackItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  highlight?: string;
  items: string[];
  bg: string;
};

const STACK = (t: I18nContextType["t"]): StackItem[] => [
  {
    title: t("stack.frontend.title"),
    description: t("stack.frontend.description"),
    icon: PaintBucketIcon,
    highlight: "border-t-8 border-accent",
    items: [
      t("stack.frontend.items.0"),
      t("stack.frontend.items.1"),
      t("stack.frontend.items.2"),
      t("stack.frontend.items.3"),
    ],
    bg: "bg-card/75",
  },
  {
    title: t("stack.backend.title"),
    description: t("stack.backend.description"),
    icon: ServerCogIcon,
    highlight: "border-t-8 border-primary",
    items: [
      t("stack.backend.items.0"),
      t("stack.backend.items.1"),
      t("stack.backend.items.2"),
      t("stack.backend.items.3"),
    ],
    bg: "bg-card/75",
  },
  {
    title: t("stack.architecture.title"),
    description: t("stack.architecture.description"),
    icon: Charts,
    highlight: "border-t-8 border-accent",
    items: [
      t("stack.architecture.items.0"),
      t("stack.architecture.items.1"),
      t("stack.architecture.items.2"),
      t("stack.architecture.items.3"),
    ],
    bg: "bg-card/75",
  },
];

function StackCard({
  title,
  description,
  icon: Icon,
  items,
  highlight,
  bg,
}: StackItem) {
  return (
    <div
      className={`rounded-[20px] p-6 h-full lg:p-10 flex flex-col ${bg} ${highlight}`}
    >
      <div className="bg-white/40 dark:bg-primary/10 p-4 self-start rounded-xl">
        <Icon size={40} className="text-accent" />
      </div>
      <h2 className="text-3xl font-semibold mt-8 mb-4">{title}</h2>
      <p className="text-zinc-500 mb-10 lg:min-h-38">{description}</p>
      <ul className="text-zinc-500">
        {items.map((item, index) => (
          <li
            key={item}
            className={`flex gap-2 items-center mb-4 ${
              index === 0 ? "font-semibold" : ""
            }`}
          >
            <ChevronRightCircle size={14} className="text-primary shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stats() {
  const { t } = useI18n();

  const stats = [
    { value: 6, suffix: "+", label: t("stack.about.stats.years"), color: "text-primary/60" },
    { value: 40, suffix: "+", label: t("stack.about.stats.products"), color: "text-secondary/60" },
    { value: 12000, suffix: "+", label: t("stack.about.stats.commits"), color: "text-accent/60" },
  ];
  return (
    <div className="mt-6 flex flex-wrap justify-center lg:justify-end lg:mr-10 gap-5 lg:gap-14">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center min-w-0">
          <span className={`${stat.color} text-xl lg:text-3xl font-semibold`}>
            <CountUp to={stat.value} />
            {stat.suffix}
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-center">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function AboutSection() {
  const { t } = useI18n();

  return (
    <section className="bg-card/75 z-10 w-full mt-8 rounded-[20px] flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 p-6 lg:p-12 items-center overflow-hidden">
      <div className="bg-accent rounded-[20px] lg:w-[30%] w-[70%] overflow-hidden">
        <Image
          src={me}
          alt="Work"
          className="w-full h-auto rounded-[20px] opacity-60 relative -top-5"
        />
      </div>
      <div className="lg:w-[70%] w-full text-zinc-500 min-w-0">
        <span className="uppercase text-xs text-primary tracking-widest font-bold">
          {t("stack.about.title")}
        </span>
        <h1 className="font-semibold text-secondary text-3xl my-3">
          {t("stack.about.subtitle")}
        </h1>
        <p className="mb-3">{t("stack.about.p1")}</p>
        <p className="mb-3">{t("stack.about.p2")}</p>
        <Stats />
      </div>
    </section>
  );
}

export default function StackPage() {
  const { t } = useI18n();
  return (
    <section
      id="Stack"
      className="max-w-6xl mx-auto flex flex-col overflow-hidden p-4 md:p-20 lg:p-4"
    >
      <section className="flex flex-col lg:flex-row gap-10 min-w-0">
        {STACK(t).map((stack, i) => (
          <motion.div
            key={stack.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            viewport={{ once: false }}
            className="z-10 mx-6 lg:mx-0 flex-1"
          >
            <StackCard {...stack} />
          </motion.div>
        ))}
      </section>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: false }}
        className="z-10 min-w-0"
      >
        <AboutSection />
      </motion.div>
    </section>
  );
}
