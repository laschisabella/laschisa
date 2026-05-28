"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRightCircle } from "lucide-react";

import Title from "@/components/Title";

import contrastly from "@/public/contrastly.png";
import hooksee from "@/public/hooksee.png";
import flowmap from "@/public/flowmap.png";
import { HoverSwapButton } from "@/components/HoverSwapButton";
import { useI18n } from "@/hooks/useI18n";

const MotionCard = motion.div;

interface WorkItem {
  title: string;
  subtitle: string;
  description: string;
  category: string[];
  image: StaticImageData;
  tags: string[];
}

type Translate = ReturnType<typeof useI18n>["t"];

const WORK_ITEMS = (t: Translate): WorkItem[] => [
  {
    title: t("work.flowmap.title"),
    subtitle: t("work.flowmap.subtitle"),
    description: t("work.flowmap.description"),
    category: [
      t("work.flowmap.category.0"),
      t("work.flowmap.category.1"),
      t("work.flowmap.category.2"),
    ],
    image: flowmap,
    tags: [
      t("work.flowmap.tags.0"),
      t("work.flowmap.tags.1"),
      t("work.flowmap.tags.2"),
      t("work.flowmap.tags.3"),
    ],
  },
  {
    title: t("work.contrastly.title"),
    subtitle: t("work.contrastly.subtitle"),
    description: t("work.contrastly.description"),
    category: [
      t("work.contrastly.category.0"),
      t("work.contrastly.category.1"),
      t("work.contrastly.category.2"),
    ],
    image: contrastly,
    tags: [
      t("work.contrastly.tags.0"),
      t("work.contrastly.tags.1"),
      t("work.contrastly.tags.2"),
      t("work.contrastly.tags.3"),
    ],
  },
  {
    title: t("work.hooksee.title"),
    subtitle: t("work.hooksee.subtitle"),
    description: t("work.hooksee.description"),
    category: [
      t("work.hooksee.category.0"),
      t("work.hooksee.category.1"),
      t("work.hooksee.category.2"),
    ],
    image: hooksee,
    tags: [
      t("work.hooksee.tags.0"),
      t("work.hooksee.tags.1"),
      t("work.hooksee.tags.2"),
      t("work.hooksee.tags.3"),
    ],
  },
];

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-col gap-1 my-5 pb-2 relative left-5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-zinc-600 dark:dark:text-zinc-300 flex items-center gap-2"
        >
          <ChevronRightCircle size={14} className="text-accent" />
          {tag}
        </span>
      ))}
    </ul>
  );
}

function Actions() {
  const { t } = useI18n();

  return (
    <div className="flex flex-wrap gap-5">
      <HoverSwapButton
        variant="outline"
        defaultText={t("work.actions.sourceCode")}
        hoverText={t("work.actions.comingSoon")}
      />

      <HoverSwapButton
        defaultText={t("work.actions.liveDemo")}
        hoverText={t("work.actions.comingSoon")}
        icon={<ArrowRight />}
      />
    </div>
  );
}

function FeaturedCard({ item }: { item: WorkItem }) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: false }}
      className="flex flex-col md:flex-row bg-card/75 p-5 lg:p-14 gap-7 rounded-[20px] items-center mb-10"
    >
      <div className="w-full md:w-[50%] dark:opacity-80 relative top-5">
        <div className="relative text-center lg:text-left lg:left-13">
          <h1 className="text-4xl font-semibold my-1 dark:text-white">
            {item.title}
          </h1>
          <h2 className="text-xl font-semibold my-1 text-zinc-500 dark:text-zinc-200">
            {item.subtitle}
          </h2>
        </div>
        <Image
          src={item.image}
          alt={item.title}
          className="w-full dark:opacity-80 mt-8 mb-5"
        />
      </div>

      <div className="md:w-[50%] p-5">
        <ul className="flex flex-wrap justify-center gap-5 mb-5">
          {item.category.map((cat) => (
            <li
              className="uppercase bg-accent/10 py-2 px-4 rounded-lg flex items-center text-xs tracking-widest font-bold text-primary/70 text-center"
              key={cat}
            >
              {cat}
            </li>
          ))}
        </ul>
        <p className="text-zinc-600 dark:text-zinc-300">{item.description}</p>
        <Tags tags={item.tags} />
        <div className="flex w-full justify-center lg:justify-start lg:mt-6">
          <Actions />
        </div>
      </div>
    </MotionCard>
  );
}

function DefaultCard({ item, delay }: { item: WorkItem; delay: number }) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: false }}
      className="bg-card/75 flex flex-col rounded-3xl"
    >
      <Image
        src={item.image}
        alt={item.title}
        className="w-[80%] h-auto mx-auto mt-10 dark:opacity-80"
      />
      <div className="p-6 md:p-10 md:mx-10">
        <ul className="flex flex-wrap justify-center gap-5">
          {item.category.map((cat) => (
            <li
              className="uppercase bg-accent/10 py-2 px-4 rounded-lg flex items-center text-xs tracking-widest font-bold text-primary/70 text-center"
              key={cat}
            >
              {cat}
            </li>
          ))}
        </ul>

        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-semibold mt-10 dark:text-white">
            {item.title}
          </h1>
          <h2 className="text-xl font-semibold my-1 text-zinc-500 dark:text-zinc-200 mb-4">
            {item.subtitle}
          </h2>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400">{item.description}</p>
        <Tags tags={item.tags} />
        <div className="flex justify-center">
          <Actions />
        </div>
      </div>
    </MotionCard>
  );
}

export default function WorkPage() {
  const { t } = useI18n();
  const [featured, ...rest] = WORK_ITEMS(t);

  return (
    <section
      className="min-h-screen flex flex-col max-w-6xl mx-auto overflow-hidden px-4"
      id="Work"
    >
      <Title
        title={t("work.title")}
        subtitle={t("work.description")}
      />

      <FeaturedCard item={featured} />

      <div className="flex flex-col md:flex-row gap-10">
        {rest.map((item, index) => (
          <DefaultCard key={item.title} item={item} delay={0.2 + index * 0.1} />
        ))}
      </div>
    </section>
  );
}
