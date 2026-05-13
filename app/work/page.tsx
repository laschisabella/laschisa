"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRightCircle } from "lucide-react";

import Title from "@/components/Title";

import contrastly from "@/public/contrastly.png";
import hooksee from "@/public/hooksee.png";
import flowmap from "@/public/flowmap.png";
import { HoverSwapButton } from "@/components/HoverSwapButton";

const MotionCard = motion.div;

interface WorkItem {
  title: string;
  subtitle: string;
  description: string;
  category: string[];
  image: StaticImageData;
  tags: string[];
}

const workItems: WorkItem[] = [
  {
    title: "FlowMap",
    subtitle: "Visual workflows for API integrations",
    description:
      "Inspired by years working with complex system integrations, FlowMap explores how visual tooling can simplify payload mapping and data transformation workflows.",
    category: ["DevTool", "Visual Builder", "Data Transformation"],
    image: flowmap,
    tags: [
      "Next.js",
      "TailwindCSS",
      "Recursive JSON Parsing",
      "Tree-Based Payload Rendering",
    ],
  },
  {
    title: "Contrastly",
    subtitle: "Accessibility-first palette generation",
    description:
      "Created from the intersection of frontend engineering and UI design experience, Contrastly focuses on making accessibility validation feel like a natural part of the design process.",
    category: ["Frontend Tooling", "UI Engineering", "Design Systems"],
    image: contrastly,
    tags: [
      "Next.js",
      "TailwindCSS",
      "WCAG Contrast Calculations",
      "Color Interpolation Algorithms",
    ],
  },
  {
    title: "Hooksee",
    subtitle: "Realtime API event observability",
    description:
      "Built from real integration debugging workflows involving Shopify, NetSuite and custom APIs, Hooksee focuses on making webhook inspection faster, clearer and more developer-friendly.",
    category: ["DevTool", "SaaS Platform", "Integrations"],
    image: hooksee,
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js API Routes",
      "WebSocket Realtime Updates",
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
  return (
    <div className="flex flex-wrap gap-5">
      <HoverSwapButton
        variant="outline"
        defaultText="source code"
        hoverText="Coming soon"
      />

      <HoverSwapButton
        defaultText="live demo"
        hoverText="Coming soon"
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
        <ul className="flex gap-5 mb-5">
          {item.category.map((cat, index) => (
            <li
              className="uppercase text-xs tracking-widest font-bold text-primary/70 text-center"
              key={cat}
            >
              {index > 0 && (
                <span className="mr-2 hidden lg:inline-block">•</span>
              )}
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
        <ul className="flex justify-center gap-5">
          {item.category.map((cat, index) => (
            <li
              className="uppercase text-xs tracking-widest font-bold text-primary/70 text-center"
              key={cat}
            >
              {index > 0 && (
                <span className="mr-2 hidden lg:inline-block">•</span>
              )}
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
  const [featured, ...rest] = workItems;

  return (
    <section
      className="min-h-screen flex flex-col max-w-6xl mx-auto overflow-hidden px-4"
      id="Work"
    >
      <Title
        title="Featured Work"
        subtitle="Projects shaped by real experience with integrations, frontend architecture and developer workflows."
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
