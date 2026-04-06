import { Button } from "@/components/ui/button";
import Image from "next/image";
import work1 from "@/public/work1.png";
import { ChevronRightCircle } from "lucide-react";

function SectionHeader() {
  return (
    <header className="mt-10 md:mt-20 mb-10 md:mb-16 relative left-2">
      <h1 className="text-3xl font-semibold mb-3">Featured Work</h1>
      <div className="h-1.5 w-20 bg-primary" />
      <p className="text-zinc-500 my-3">
        A collection of architectural solutions for high-stakes digital
        environments.
      </p>
    </header>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col max-w-6xl mx-auto">
      <SectionHeader />
      <div>
        <div className="flex bg-secondary/5 p-5 rounded-[20px] items-center mb-10">
          <Image src={work1} alt="Work 1" className="w-[65%] h-full" />
          <div className="w-[35%] mr-10">
            <span className="uppercase text-xs tracking-widest font-bold text-primary/70">
              fintech infrastructure
            </span>
            <h2 className="text-3xl font-semibold my-3 text-zinc-700">
              Global Checkout Infrastructure
            </h2>
            <p className="text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              fugit quisquam dolorum esse libero praesentium ipsum nam ea
              sapiente labore. Vitae eligendi sed quos molestiae iste ipsa,
              tempore alias animi..
            </p>
            <ul className="flex gap-3 my-5 pb-2">
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
            <div className="flex gap-2 justify-start">
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
        </div>

        <div className="flex gap-10 max-w-6xl mx-auto">
          <div className="bg-secondary/5 flex flex-col rounded-3xl">
            <Image src={work1} alt="Work 1" className="h-full" />
            <div className="p-10">
              <span className="uppercase text-xs tracking-widest font-bold text-primary/70">
              fintech infrastructure
            </span>
            <h2 className="text-3xl font-semibold my-3 text-zinc-700">
              Global Checkout Infrastructure
            </h2>
            <p className="text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              fugit quisquam dolorum esse libero praesentium ipsum nam ea
              sapiente labore. Vitae eligendi sed quos molestiae iste ipsa,
              tempore alias animi..
            </p>
            <ul className="flex gap-3 my-5 pb-2">
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
            <div className="flex gap-2 justify-start">
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
          </div>

          <div className="bg-secondary/5 flex flex-col rounded-3xl">
            <Image src={work1} alt="Work 1" className="h-full" />
            <div className="p-10">
              <span className="uppercase text-xs tracking-widest font-bold text-primary/70">
              fintech infrastructure
            </span>
            <h2 className="text-3xl font-semibold my-3 text-zinc-700">
              Global Checkout Infrastructure
            </h2>
            <p className="text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              fugit quisquam dolorum esse libero praesentium ipsum nam ea
              sapiente labore. Vitae eligendi sed quos molestiae iste ipsa,
              tempore alias animi..
            </p>
            <ul className="flex gap-3 my-5 pb-2">
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
            <div className="flex gap-2 justify-start">
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
          </div>


        </div>
      </div>
    </div>
  );
}
