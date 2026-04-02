import { Button } from "@/design/components/ui/button";
import { CircleArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[92vh] flex flex-col justify-between px-10 md:px-20">
      <div className="flex flex-col gap-3 items-center justify-center flex-1">
        <span className="uppercase text-xs text-primary/80 font-bold tracking-widest">senior systems architect</span>
        <div className="text-6xl font-semibold text-center my-5">
          <h1 className="text-zinc-800">Engineering Scalable</h1>
          <h1 className="text-primary">Digital Systems.</h1>
        </div>
        <div className="text-center text-zinc-500 text-lg">
          <h4>Specializing in high-performance infrastructure and distributed architectures.</h4>
          <h4>I build systems that process millions of transactions while maintaining zero-downtime reliability.</h4>
        </div>
        <div className="flex items-center my-5 gap-3">
          <Button size="xl" variant="outline">Get in touch</Button>
          <Button size="xl" variant="default">View Projects</Button>
        </div>
      </div>
      <div className="text-center pb-4 md:h-30 flex justify-end">
        <CircleArrowDown strokeWidth={1} size={60} className="text-primary"/>
      </div>
    </div>
  );
}
