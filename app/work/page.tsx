"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ChevronRightCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import Title from "@/components/Title";

import work1 from "@/public/work1.png";

const MotionCard = motion.div;

interface WorkItem {
  title: string;
  description: string;
  category: string;
  image: StaticImageData;
  tags: string[];
}

const workItems: WorkItem[] = [
  {
    title: "Global Checkout Infrastructure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugit quisquam dolorum esse libero praesentium ipsum nam ea sapiente labore.",
    category: "fintech infrastructure",
    image: work1,
    tags: ["React", "Node.js", "Stripe API", "Redis"],
  },
  {
    title: "Lorem Ipsum title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugit quisquam dolorum esse libero praesentium ipsum nam ea sapiente labore.",
    category: "fintech infrastructure",
    image: work1,
    tags: ["React", "Node.js", "Stripe API", "Redis"],
  },
  {
    title: "Lorem Ipsum title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugit quisquam dolorum esse libero praesentium ipsum nam ea sapiente labore.",
    category: "fintech infrastructure",
    image: work1,
    tags: ["React", "Node.js", "Stripe API", "Redis"],
  },
];

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-3 my-5 pb-2">
      {tags.map((tag) => (
        <li key={tag} className="px-3 py-1 bg-white dark:bg-background rounded-lg text-zinc-600 dark:text-zinc-400">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function Actions() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="ghost" className="text-secondary">
        <ChevronRightCircle />
        Source code
      </Button>
      <Button variant="ghost" className="text-accent">
        <ChevronRightCircle />
        Live demo
      </Button>
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
      className="flex flex-col md:flex-row bg-card/60 p-5 lg:p-16 gap-10 rounded-[20px] items-center mb-10"
    >
      <Image src={item.image} alt={item.title} className="w-full md:w-[35%] dark:opacity-80" />

      <div className="md:w-[65%] p-5">
        <span className="uppercase text-xs tracking-widest font-bold text-primary/70">
          {item.category}
        </span>

        <h2 className="text-3xl font-semibold my-3">{item.title}</h2>

        <p className="text-zinc-500">{item.description}</p>

        <Tags tags={item.tags} />
        <Actions />
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
      className="bg-card/60 flex flex-col rounded-3xl p-10"
    >
      <Image
        src={item.image}
        alt={item.title}
        className="w-[60%] h-auto mx-auto mt-10 dark:opacity-80"
      />

      <div className="p-6 md:p-10">
        <span className="uppercase text-xs tracking-widest font-bold text-primary/70">
          {item.category}
        </span>
        <h2 className="text-2xl font-semibold my-3">{item.title}</h2>
        <p className="text-zinc-500">{item.description}</p>
        <Tags tags={item.tags} />
        <Actions />
      </div>
    </MotionCard>
  );
}

export default function WorkPage() {
  const [featured, ...rest] = workItems;

  return (
    <section className="min-h-screen flex flex-col max-w-6xl mx-auto overflow-hidden px-4" id="Work">
      <Title
        title="Featured Work"
        subtitle="A collection of architectural solutions for high-stakes digital environments."
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
