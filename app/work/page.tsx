"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import work1 from "@/public/work1.png";
import { ChevronRightCircle } from "lucide-react";
import { motion } from "framer-motion";
import Title from "@/components/Title";

export default function WorkPage() {
  return (
    <section
      id="Work"
      className="min-h-screen flex flex-col max-w-6xl mx-auto overflow-hidden px-4"
    >
      <Title title="Featured Work" subtitle="A collection of architectural solutions for high-stakes digital environments." />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: false }}
        className="flex flex-col md:flex-row bg-card/70 p-5 rounded-[20px] items-center mb-10 z-10 min-w-0"
      >
        <Image
          src={work1}
          alt="Work 1"
          className="w-full md:w-[65%] h-auto"
        />

        <div className="md:w-[35%] md:mr-10 break-words min-w-0">
          <span className="uppercase text-xs tracking-widest font-bold text-primary/70 break-words">
            fintech infrastructuressss
          </span>

          <h2 className="text-3xl font-semibold my-3">
            Global Checkout Infrastructure
          </h2>

          <p className="text-zinc-500 break-words">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            fugit quisquam dolorum esse libero praesentium ipsum nam ea
            sapiente labore. Vitae eligendi sed quos molestiae iste ipsa,
            tempore alias animi.
          </p>

          <ul className="flex flex-wrap gap-3 my-5 pb-2">
            <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
              React
            </li>
            <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
              Node.js
            </li>
            <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
              Stripe API
            </li>
            <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
              Redis
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 justify-start">
            <Button variant="ghost" className="text-secondary">
              <ChevronRightCircle />
              Source code
            </Button>
            <Button variant="ghost" className="text-accent">
              <ChevronRightCircle />
              Live demo
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: false }}
          className="bg-card/70 z-10 flex flex-col rounded-3xl min-w-0"
        >
          <Image src={work1} alt="Work 1" className="w-full h-auto" />

          <div className="p-6 md:p-10 break-words">
            <span className="uppercase text-xs tracking-widest font-bold text-primary/70 break-words">
              fintech infrastructure
            </span>

            <h2 className="text-3xl font-semibold my-3">
              Global Checkout Infrastructure
            </h2>

            <p className="text-zinc-500 break-words">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              fugit quisquam dolorum esse libero praesentium ipsum nam ea
              sapiente labore. Vitae eligendi sed quos molestiae iste ipsa,
              tempore alias animi.dddddddddd.
            </p>

            <ul className="flex flex-wrap gap-3 my-5 pb-2">
              <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
                React
              </li>
              <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
                Node.js
              </li>
              <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
                Stripe API
              </li>
              <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
                Redis
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 justify-start">
              <Button variant="ghost" className="text-secondary">
                <ChevronRightCircle />
                Source code
              </Button>
              <Button variant="ghost" className="text-accent">
                <ChevronRightCircle />
                Live demo
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: false }}
          className="bg-card/70 z-10 flex flex-col rounded-3xl min-w-0"
        >
          <Image src={work1} alt="Work 1" className="w-full h-auto" />

          <div className="p-6 md:p-10 break-words">
            <span className="uppercase text-xs tracking-widest font-bold text-primary/60 break-words">
              fintech infrastructure
            </span>

            <h2 className="text-3xl font-semibold my-3">
              Global Checkout Infrastructure
            </h2>

            <p className="text-zinc-500 break-words">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              fugit quisquam dolorum esse libero praesentium ipsum nam ea
              sapiente labore. Vitae eligendi sed quos molestiae iste ipsa,
              tempore alias animi..
            </p>

            <ul className="flex flex-wrap gap-3 my-5 pb-2">
              <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
                React
              </li>
              <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
                Node.js
              </li>
              <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
                Stripe API
              </li>
              <li className="px-3 py-1 bg-white rounded-lg text-zinc-600">
                Redis
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 justify-start">
              <Button variant="ghost" className="text-secondary">
                <ChevronRightCircle />
                Source code
              </Button>
              <Button variant="ghost" className="text-accent">
                <ChevronRightCircle />
                Live demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}