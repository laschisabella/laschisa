"use client";

import {
  ChevronRightCircle,
  CloudCogIcon,
  PaintBucketIcon,
  ServerCogIcon,
} from "lucide-react";
import Image from "next/image";
import me from "@/public/me.png";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

type StackItem = {
  title: string;
  description: string;
  icon: React.ElementType;
  highlight?: string;
  items: string[];
  bg: string;
};

const STACK: StackItem[] = [
  {
    title: "Frontend",
    description:
      "Crafting immersive, type-safe user interfaces with a focus on animation physics and atomic design.",
    icon: PaintBucketIcon,
    highlight: "border-t-8 border-accent",
    items: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js (WebGL)",
    ],
    bg: "bg-card/60",
  },
  {
    title: "Backend",
    description:
      "Building robust, scalable server-side applications with a focus on performance and maintainability.",
    icon: ServerCogIcon,
    highlight: "border-t-8 border-primary",
    items: ["Go (Golang)", "Node.js", "PostgreSQL", "gRPC & GraphQL"],
    bg: "bg-card/60",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Architecting immutable infrastructure and automated delivery pipelines for zero-downtime deployments.",
    icon: CloudCogIcon,
    highlight: "border-t-8 border-accent",
    items: [
      "Kubernetes",
      "Terraform (IaC)",
      "Github Actions / CI",
      "Prometheus & Grafana",
    ],
    bg: "bg-card/60",
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
    <div className={`rounded-[20px] p-6 h-full lg:p-10 flex flex-col ${bg} ${highlight} min-w-0`}>
      <div className="bg-white/40 dark:bg-primary/10 p-4 self-start rounded-xl">
        <Icon size={40} className="text-accent" />
      </div>
      <h2 className="text-3xl font-semibold mt-8 mb-4">{title}</h2>
      <p className="text-zinc-500 mb-10 min-h-26">{description}</p>
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
  const stats = [
    { value: 6, suffix: "+", label: "years exp", color: "text-primary/60" },
    { value: 40, suffix: "+", label: "products", color: "text-secondary/60" },
    { value: 12000, suffix: "+", label: "commits", color: "text-accent/60" },
  ];
  return (
    <div className="mt-10 flex flex-wrap justify-center lg:justify-end lg:mr-10 gap-5 lg:gap-14">
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
  return (
    <section className="bg-card/60 z-10 w-full mt-8 rounded-[20px] flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 p-6 lg:p-12 items-center overflow-hidden">
      <div className="bg-accent rounded-[20px] lg:w-[30%] w-[70%] overflow-hidden">
        <Image
          src={me}
          alt="Work"
          className="w-full h-auto rounded-[20px] opacity-60 relative -top-5"
        />
      </div>

      <div className="lg:w-[70%] w-full text-zinc-500 min-w-0">
        <span className="uppercase text-xs text-primary tracking-widest font-bold">
          beyond the code
        </span>

        <h1 className="font-semibold text-secondary text-3xl my-3">
          Building with intentionality.
        </h1>

        <p className="mb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          veritatis consequuntur, doloribus aut ipsum expedita voluptatibus.
        </p>

        <p className="mb-3">
          Assumenda dolores corrupti ipsum est, eaque dolore earum corporis
          eligendi nisi expedita odit similique.
        </p>

        <Stats />
      </div>
    </section>
  );
}

export default function StackPage() {
  return (
    <section
      id="Stack"
      className="max-w-6xl mx-auto flex flex-col overflow-hidden p-4 md:p-20 lg:p-4"
    >
      <section className="flex flex-col lg:flex-row gap-10 min-w-0">
        {STACK.map((stack, i) => (
          <motion.div
            key={stack.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            viewport={{ once: false }}
            className="z-10 mx-6 lg:mx-0"
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
